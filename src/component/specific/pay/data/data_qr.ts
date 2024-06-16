// components/PayDonateTileData.ts

export interface PayDonateTileData {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export const payDonateTileData: PayDonateTileData = {
  title: "Pay using Qr",
  description: "Help us make a difference in the world.",
  imageUrl: "/images/donation.png", // Replace with actual image path
  linkUrl: "https://example.com/donate", // Replace with actual donate link
};
