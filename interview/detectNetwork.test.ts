import { describe, it, expect } from "vitest";
import { detectNetwork } from "./detectNetwork";

describe("Credit Card Network Detection", () => {
  describe("American Express", () => {
    it("should identify American Express cards with prefix 34 and length 15", () => {
      expect(detectNetwork("341234567890123")).toBe(
        "American Express",
      );
      expect(detectNetwork("340000000000000")).toBe(
        "American Express",
      );
    });

    it("should identify American Express cards with prefix 37 and length 15", () => {
      expect(detectNetwork("371234567890123")).toBe(
        "American Express",
      );
      expect(detectNetwork("370000000000000")).toBe(
        "American Express",
      );
    });

    it("should reject cards with American Express prefixes but wrong length", () => {
      expect(detectNetwork("3412345678901")).not.toBe(
        "American Express",
      ); // 14 digits
      expect(detectNetwork("34123456789012345")).not.toBe(
        "American Express",
      ); // 17 digits
    });
  });

  describe("Diners Club", () => {
    it("should identify Diners Club cards with prefix 38 and length 14", () => {
      expect(detectNetwork("38123456789012")).toBe("Diners Club");
      expect(detectNetwork("38000000000000")).toBe("Diners Club");
    });

    it("should identify Diners Club cards with prefix 39 and length 14", () => {
      expect(detectNetwork("39123456789012")).toBe("Diners Club");
      expect(detectNetwork("39000000000000")).toBe("Diners Club");
    });

    it("should reject cards with Diners Club prefixes but wrong length", () => {
      expect(detectNetwork("3812345678901")).not.toBe("Diners Club"); // 13 digits
      expect(detectNetwork("381234567890123")).not.toBe(
        "Diners Club",
      ); // 15 digits
    });
  });

  describe("Visa", () => {
    it("should identify Visa cards with prefix 4 and length 13", () => {
      expect(detectNetwork("4123456789012")).toBe("Visa");
      expect(detectNetwork("4000000000000")).toBe("Visa");
    });

    it("should identify Visa cards with prefix 4 and length 16", () => {
      expect(detectNetwork("4123456789012345")).toBe("Visa");
      expect(detectNetwork("4000000000000000")).toBe("Visa");
    });

    it("should identify Visa cards with prefix 4 and length 19", () => {
      expect(detectNetwork("4123456789012345678")).toBe("Visa");
      expect(detectNetwork("4000000000000000000")).toBe("Visa");
    });

    it("should reject cards with Visa prefixes but wrong length", () => {
      expect(detectNetwork("412345678901")).not.toBe("Visa"); // 12 digits
      expect(detectNetwork("41234567890123456")).not.toBe("Visa"); // 17 digits
      expect(detectNetwork("41234567890123456789")).not.toBe("Visa"); // 20 digits
    });
  });

  describe("MasterCard", () => {
    it("should identify MasterCard with prefix 51 and length 16", () => {
      expect(detectNetwork("5112345678901234")).toBe("MasterCard");
    });

    it("should identify MasterCard with prefix 52 and length 16", () => {
      expect(detectNetwork("5212345678901234")).toBe("MasterCard");
    });

    it("should identify MasterCard with prefix 53 and length 16", () => {
      expect(detectNetwork("5312345678901234")).toBe("MasterCard");
    });

    it("should identify MasterCard with prefix 54 and length 16", () => {
      expect(detectNetwork("5412345678901234")).toBe("MasterCard");
    });

    it("should identify MasterCard with prefix 55 and length 16", () => {
      expect(detectNetwork("5512345678901234")).toBe("MasterCard");
    });

    it("should reject cards with MasterCard prefixes but wrong length", () => {
      expect(detectNetwork("511234567890123")).not.toBe("MasterCard"); // 15 digits
      expect(detectNetwork("51123456789012345")).not.toBe(
        "MasterCard",
      ); // 17 digits
    });
  });

  describe("Edge cases", () => {
    it("should return 'Identity card not found!' for invalid card numbers", () => {
      expect(detectNetwork("1234567890123")).toBe(
        "Identity card not found!",
      );
      expect(detectNetwork("0000000000000")).toBe(
        "Identity card not found!",
      );
      expect(detectNetwork("6012345678901234")).toBe(
        "Identity card not found!",
      );
    });

    it("should handle empty strings", () => {
      expect(detectNetwork("")).toBe("Identity card not found!");
    });
  });

  describe("Ambiguous cases", () => {
    it("should correctly distinguish between cards with similar prefixes", () => {
      // Card number starts with 3, but is not American Express or Diners Club
      expect(detectNetwork("30123456789012")).toBe(
        "Identity card not found!",
      );
      expect(detectNetwork("36123456789012")).toBe(
        "Identity card not found!",
      );
    });
  });
});
