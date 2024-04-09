"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
const bunyan_1 = __importDefault(require("bunyan"));
const cloudinary_1 = __importDefault(require("cloudinary"));
class Config {
    constructor() {
        this.MONGO_URI = process.env.MONGO_URI || '';
        this.JWT_TOKEN = process.env.JWT_TOKEN || '1234';
        this.NODE_ENV = process.env.NODE_ENV || '';
        this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
        this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
        this.CLIENT_URI = process.env.CLIENT_URI || '';
        this.REDIS_HOST = process.env.REDIS_HOST || '';
        this.CLOUD_NAME = process.env.CLOUD_NAME || '';
        this.API_KEY = process.env.API_KEY || '';
        this.API_SECRET = process.env.API_SECRET || '';
        this.API_URL = process.env.API_URL || '';
        this.FOLDER = process.env.FOLDER || '';
        // Email
        this.SENDER_EMAIL = process.env.SENDER_EMAIL || '';
        this.SENDER_EMAIL_PASSWORD = process.env.SENDER_EMAIL_PASSWORD || '';
        this.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
        this.SENDGRID_SENDER = process.env.SENDGRID_SENDER || '';
        this.EC2_URL = process.env.EC2_URL || '';
    }
    validateConfig() {
        for (const [key, value] of Object.entries(this)) {
            // to do: remove this later these key exception later
            if (value === '' && key !== 'SENDGRID_API_KEY' && key !== 'SENDGRID_SENDER')
                throw new Error(`Configuration ${key} is ''`);
        }
    }
    createLogger(name) {
        return bunyan_1.default.createLogger({
            name,
            level: 'debug'
        });
    }
    cloudinaryConfig() {
        cloudinary_1.default.v2.config({
            cloud_name: this.CLOUD_NAME,
            api_key: this.API_KEY,
            api_secret: this.API_SECRET
        });
    }
}
exports.config = new Config();
//# sourceMappingURL=config.js.map