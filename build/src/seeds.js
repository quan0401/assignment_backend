"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const faker_1 = require("@faker-js/faker");
const canvas_1 = require("canvas");
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
const avatarColor = () => {
    const colors = [
        '#FFFFFF',
        '#000000',
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#FFFF00',
        '#00FFFF',
        '#FF00FF',
        '#808080',
        '#FFA500' // Orange
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};
const generateAvatar = (text, backgroundColor, foregroundColor = 'white') => {
    const canvas = (0, canvas_1.createCanvas)(200, 200);
    const context = canvas.getContext('2d');
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = 'normal 80p sans-serif';
    context.fillStyle = foregroundColor;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    return canvas.toDataURL('image/png');
};
const seedUserData = (count) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        for (let i = 0; i < count; i++) {
            const username = faker_1.faker.internet.userName();
            const color = avatarColor();
            const avatar = generateAvatar(username.charAt(0).toUpperCase(), color);
            const body = {
                username,
                password: 'quan0401',
                email: faker_1.faker.internet.email(),
                avatarColor: color,
                avatarImage: avatar
            };
            console.log(`***ADDING USER TO DATABASE*** - ${i + 1} of ${count} - ${username}`);
            yield axios_1.default.post(config_1.config.API_URL + '/signup', body);
        }
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            const err = error;
            console.log((_a = err.response) === null || _a === void 0 ? void 0 : _a.data, err.message);
        }
        else {
            const err = error;
            console.log(err);
        }
    }
});
seedUserData(10);
//# sourceMappingURL=seeds.js.map