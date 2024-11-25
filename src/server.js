// const express = require("express");
// const app = express();
// app.use(express.json());

// app.post("/translate", async (req, res) => {
//   const { text, targetLanguage } = req.body;

//   try {
//     const fetch = (await import("node-fetch")).default;

//     const params = new URLSearchParams();
//     params.append("text", text);
//     params.append("target_lang", targetLanguage);
//     params.append("tag_handling", "html");

//     const response = await fetch("https://api.deepl.com/v2/translate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: `DeepL-Auth-Key 05e13e72-721c-481a-a52c-037a7d15837c`,
//       },
//       body: params.toString(),
//     });

//     if (!response.ok) {
//       throw new Error(`API request failed with status ${response.status}`);
//     }

//     const responseText = await response.text();
//     console.log("Raw Response Text:", responseText);

//     if (!responseText.trim()) {
//       throw new Error("Received empty response from DeepL API");
//     }

//     let data;
//     try {
//       data = JSON.parse(responseText);
//     } catch (parseError) {
//       throw new Error("Failed to parse JSON from response");
//     }

//     if (data.translations && data.translations[0]) {
//       res.json({ translatedText: data.translations[0].text });
//     } else {
//       throw new Error("Invalid response format from DeepL API");
//     }
//   } catch (error) {
//     console.error("DeepL API Error:", error.message);
//     res
//       .status(500)
//       .json({ error: "Translation failed. Please try again later." });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// // let port = process.env.PORT;
// // if (port == null || port == "") {
// //   port = 8000;
// // }
// // app.listen(port);
