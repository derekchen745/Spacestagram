import { atom } from "recoil";

export const photoAtom = atom({ key: "photo", default: null });

export const likedPhotos = atom({ key: "likedPhotos", default: [] });

export const dateAtom = atom({ key: "date", default: null });

export const likedAtom = atom({ key: "liked", default: null });
