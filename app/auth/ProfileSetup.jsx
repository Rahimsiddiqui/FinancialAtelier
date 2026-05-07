"use client";

import { useState, useMemo, useRef } from "react";
import { User, Camera, Loader2, Check } from "lucide-react";

export default function ProfileSetup({ initialName, onComplete, isLoading }) {
  const [username, setUsername] = useState(
    initialName.toLowerCase().replace(/\s/g, ""),
  );
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError("");

    // Validate: JPG, PNG, AVIF
    const validTypes = ["image/jpeg", "image/png", "image/avif"];
    if (!validTypes.includes(file.type)) {
      setError("Only JPG, PNG, and AVIF allowed.");
      return;
    }

    // Validate: Size < 5MB
    if (file.size > 5 * 1024 * 1024) {
      setError("File must be under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({ username, avatar: selectedAvatar });
  };

  const avatars = useMemo(() => {
    if (!username) return [];

    return [
      `https://api.dicebear.com/6.x/initials/svg?seed=${username}&backgroundColor=b6e3f4&color=1c1c1c`,
      `https://api.dicebear.com/6.x/bottts/svg?seed=${username}`,
      `https://api.dicebear.com/6.x/adventurer/svg?seed=${username}`,
      `https://api.dicebear.com/6.x/thumbs/svg?seed=${username}`,
    ];
  }, [username]);

  return (
    <div className="flex flex-col gap-8 md:mt-7">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold font-manrope">
          Personalize your profile
        </h2>
        <p className="text-secondary/70 text-sm">
          How should the atelier address you?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="flex flex-col items-center gap-4 mb-2 mt-2">
          {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
          <div
            className="relative w-24 h-24 mb-3"
            onClick={() => fileInputRef.current?.click()}
          >
            {selectedAvatar ? (
              <img
                src={selectedAvatar}
                alt="Selected Avatar"
                className="w-full h-full object-cover rounded-full object-cover border-4 border-blue-500 cursor-pointer"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-surface-highlight flex items-center justify-center border-2 border-dashed border-border/60">
                <User size={40} className="text-secondary/30" />
              </div>
            )}
            <button
              type="button"
              className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white shadow-lg cursor-pointer transition-colors"
            >
              <Camera size={16} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.avif"
              className="hidden"
            />
          </div>

          <div className="flex gap-4">
            {avatars.map((avatar, idx) => (
              <button
                key={`${avatar}-${idx}`}
                type="button"
                onClick={() => setSelectedAvatar(avatar)}
                className={`relative w-12 h-12 cursor-pointer rounded-full overflow-hidden border-2 transition-all ${
                  selectedAvatar === avatar
                    ? "border-blue-500 scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={avatar}
                  alt={`Avatar ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                {selectedAvatar === avatar && (
                  <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col relative gap-3 mt-3">
          <label
            htmlFor="username"
            className="font-manrope font-bold text-xs uppercase text-secondary/90 tracking-wider"
          >
            Username
          </label>

          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="johndoe123"
            className="bg-surface-highlight/70 rounded-xl p-4 pl-15 border border-border/60 active:outline-2 outline-primary/50"
          />

          <User className="w-5.5 h-5.5 absolute left-5 bottom-[1.1rem] opacity-40" />
        </div>

        <button
          disabled={isLoading || !username}
          className={`border-none flex justify-center items-center rounded-lg px-12 py-3.5 text-[0.95rem] text-white bg-blue-700/90 hover:bg-blue-700 transition-all font-bold font-manrope tracking-wide group mt-2 ${
            isLoading || !username
              ? "opacity-70 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          {isLoading ? (
            <>
              Finalizing
              <Loader2 size={20} className="animate-spin ml-2.5" />
            </>
          ) : (
            "Complete Setup"
          )}
        </button>
      </form>
    </div>
  );
}
