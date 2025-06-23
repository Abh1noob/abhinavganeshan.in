import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const key = request.nextUrl.searchParams.get("key");
    const iv = request.nextUrl.searchParams.get("iv");
    const plainText = request.nextUrl.searchParams.get("plaintext") ?? "";

    if (!key || !iv) {
      throw new Error("Key and IV must be provided as hexadecimal strings.");
    }

    const keyBuffer = Buffer.from(key, "hex");
    const ivBuffer = Buffer.from(iv, "hex");

    if (keyBuffer.length !== 32) {
      throw new Error(
        "Invalid key length. Key must be 32 bytes (256 bits) in hexadecimal format."
      );
    }

    if (ivBuffer.length !== 16) {
      throw new Error(
        "Invalid IV length. IV must be 16 bytes (128 bits) in hexadecimal format."
      );
    }

    const cipher = crypto.createCipheriv("aes-256-cbc", keyBuffer, ivBuffer);
    let encrypted = cipher.update(plainText, "utf-8", "hex");
    encrypted += cipher.final("hex");

    return NextResponse.json(
      {
        key,
        iv,
        plainText,
        encrypted,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Encryption failed.",
        error: error,
      },
      { status: 500 }
    );
  }
}
