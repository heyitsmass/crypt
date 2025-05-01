## Crypt - Steganographic AI Password Generator

_This ones's just for fun, not entirely practical for regular use_

- [Crypt - Steganographic AI Password Generator](#crypt---steganographic-ai-password-generator)
  - [Goal/Vision](#goalvision)
  - [Core Features](#core-features)
  - [Key Components / Architecture](#key-components--architecture)
  - [Tech Stack](#tech-stack)
  - [Potential Challenges](#potential-challenges)

### Goal/Vision

To create a novel password generation system where unique, strong passwords are generated and then hidden within the binary data of an AI-generated image using steganography. The image itself acts as the memorable "key" or storage medium, hiding the password in plain sight.

### Core Features

-   **Password Generation:** Generate cryptographically strong random passwords.
-   **AI Image Generation:** Interface with an external service (e.g., AWS Bedrock with Stable Diffusion, Replicate API, other) to generate a unique image based on user prompts or random seeds.
-   **Steganography Engine:**
    -   **Embedding:** Embed the generated password data securely within the pixels or metadata of the AI-generated image (e.g., using Least Significant Bit - LSB steganography or more robust methods).
    -   **Extraction:** Extract the hidden password data from a provided image.
-   **User Interface (Next.js):** Allow users to trigger generation, view the image, and potentially extract the password later (perhaps requiring the original prompt or seed as an additional factor).
-   **Server-Side Coordination:** The Next.js server side likely coordinates the process: generate password -> call AI service -> receive image -> perform steganography -> return image to client.

### Key Components / Architecture

-   **Frontend (Next.js):**
    -   UI for initiating the process (e.g., text prompt for image).
    -   Displays the final image containing the hidden password.
    -   UI for uploading an image to extract the password.
-   **Backend (Next.js API Routes):**
    -   **Password Generation Module:** Uses secure random generation (e.g., Node.js `crypto.randomBytes`).
    -   **AI Service Client:** Interacts with the chosen AI image generation API (e.g., AWS SDK, `axios`/`fetch` for Replicate). Handles API keys securely.
    -   **Steganography Module:** Implements LSB or other steganographic algorithms. Requires image manipulation capabilities.
    -   **Orchestration Logic:** Coordinates the flow: generate password -> generate image -> embed password -> return image URL/data. And the reverse: receive image -> extract password -> return password.
-   **Image Manipulation Library (Backend):** Needed for steganography (e.g., `sharp`, `jimp` for Node.js; Pillow for Python if backend is Python).
-   **External AI Service:** AWS Bedrock, Replicate, Stability AI API, etc.

### Tech Stack

-   Framework: Next.js (React, TypeScript)
-   Backend: Node.js (if needed)
-   AI Service API Client: AWS SDK, `axios`/`fetch`.
-   Image Manipulation: `sharp`, `jimp`.
-   Steganography: Custom implementation or library (if available and suitable).
-   Password Generation: Node.js `crypto` module.

### Potential Challenges

-   **Steganography Robustness:** Simple LSB is fragile and easily destroyed by image compression (e.g., JPEG) or resizing. More robust techniques are needed for practical use.
-   **Capacity:** Limited amount of data can be hidden depending on image size and technique.
-   **Security:** The password exists unencrypted within the image data (though hidden). If the steganography technique is known or weak, the password can be extracted. This is "security by obscurity" primarily. Consider encrypting the password _before_ embedding.
-   **AI Service Costs & Latency:** Image generation can be slow and incur costs.
-   Error handling across the multi-step process (password gen, AI gen, embedding).
-   Ensuring the extraction process reliably retrieves the exact original password.
