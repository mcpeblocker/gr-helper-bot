import { Bot } from "grammy";
import config from "../utils/config";

const bot = new Bot(config.BOT_TOKEN);

export default bot;