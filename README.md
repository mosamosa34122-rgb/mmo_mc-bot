# 🎮 mmo_mc-bot (V1)

A lightweight, robust, and fully customizable Minecraft bot built with Node.js and Mineflayer. Designed to keep chunks loaded, farm AFK, and bypass standard anti-AFK kicks with automated random movements. 

🌟 **Brought to you by Moha Studios**  
👨‍💻 **Developer:** mo-dev775

---

## ✨ Features

* **Multi-Version Support:** Automatically detects and connects to almost any Minecraft server version.
* **Anti-AFK System:** Continuously performs micro-jumps and random camera rotations to prevent server kicks.
* **Auto-Reconnect:** Automatically attempts to rejoin the server if kicked or disconnected.
* **Custom Identity:** Set a specific username, display name (nickname), and custom skin.
* **Cracked & Premium Support:** Works on both offline-mode and official Microsoft-authenticated servers.

---

## 📋 Prerequisites

Before installing, ensure you have the following ready:
* **Node.js** (v18 or higher recommended)
* A Minecraft server to connect to.
* *(Optional)* **SkinsRestorer** plugin on your server (for custom skins).
* *(Optional)* **EssentialsX** or a similar chat plugin (for custom display names).

---

## 🚀 Installation & Setup

**1. Clone or Download the Repository**
Extract the bot files into a dedicated folder on your machine or VPS.

**2. Install Dependencies**
Open your terminal in the bot's folder and run:
```bash
npm install
```

**3. Configure the Bot**
Open the `config.json` file and adjust the settings to match your server.

```json
{
  "host": "play.yourserver.com",
  "port": 25565,
  "version": false, 
  "auth": "offline",
  "username": "BaseBotName",
  "skinName": "Dream",
  "displayName": "CustomDisplayNick"
}
```

### ⚙️ Configuration Guide
| Setting | Description |
|---|---|
| `host` | Your server's IP address or domain. |
| `port` | Your server's port (default is 25565). |
| `version` | Leave as `false` to auto-detect, or force a version (e.g., `"1.20.4"`). |
| `auth` | Use `"offline"` for cracked servers or `"microsoft"` for premium. |
| `username` | The base login name the bot will use. |
| `skinName` | The skin the bot will pull (Requires `/skin set` permissions). |
| `displayName` | The nickname shown in chat/tab (Requires `/nick` permissions). |

---

## 💻 Usage

To start the bot, simply run the following command in your terminal:

```bash
npm start
```
*(Alternatively, you can run `node bot.js`)*

**Console Output:**
You will see logs in your terminal confirming the bot's status:
```text
[*] Connecting to play.yourserver.com:25565...
[+] Successfully logged in as BaseBotName
[+] Bot has spawned in the world!
[*] Requesting custom skin: Dream
[*] Setting custom display name to: CustomDisplayNick
[*] Starting anti-AFK static movement loop.
```

---

## 🛑 Troubleshooting

* **Bot gets kicked immediately:** Ensure `auth` is set to `"microsoft"` if the server has `online-mode=true`.
* **Skin or Nickname not working:** The bot uses `/skin set <name>` and `/nick <name>` upon spawning. Ensure the bot has the correct permissions (or OP) on the server to execute these commands.
* **Version mismatch error:** If `version: false` fails to auto-detect the server version (common on servers using proxy networks like BungeeCord or ViaVersion), manually type the version in the config (e.g., `"1.21"`).

---
*Created with ❤️ by **mo-dev775** | **Moha Studios***
