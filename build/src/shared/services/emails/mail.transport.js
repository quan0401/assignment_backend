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
exports.mailTransport = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../../../config");
const error_handler_1 = require("../../globals/helpers/error-handler");
const log = config_1.config.createLogger('MailTransport');
class MailTransport {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: config_1.config.SENDER_EMAIL,
                pass: config_1.config.SENDER_EMAIL_PASSWORD
            }
        });
    }
    sendMail(receiverEmail, subject, body) {
        return __awaiter(this, void 0, void 0, function* () {
            // if (config.NODE_ENV === 'development' || config.NODE_ENV === 'test') {
            //   await this.developmentEmailSender(receiverEmail, subject, body);
            // } else {
            //   await this.productionEmailSender(receiverEmail, subject, body);
            // }
            yield this.productionEmailSender(receiverEmail, subject, body);
        });
    }
    // private async developmentEmailSender(receiverEmail: string, subject: string, body: string): Promise<void> {
    //   const transporter: Mail = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false,
    //     auth: {
    //       user: config.SENDER_EMAIL,
    //       pass: config.SENDER_EMAIL_PASSWORD
    //     }
    //   });
    //   const mailOptions: IMailOptions = {
    //     from: `Social app ${config.SENDER_EMAIL}`,
    //     to: receiverEmail,
    //     subject: subject,
    //     html: body
    //   };
    //   try {
    //     await transporter.sendMail(mailOptions);
    //     log.info('Development email sent successfully');
    //   } catch (error) {
    //     log.error(error);
    //     throw new BadRequesetError('Error sending email');
    //   }
    // }
    productionEmailSender(receiverEmail, subject, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const mailOptions = {
                from: `Social app ${config_1.config.SENDER_EMAIL}`,
                to: receiverEmail,
                subject: subject,
                html: body
            };
            try {
                // await sendGridMail.send(mailOptions);
                yield this.transporter.sendMail(mailOptions);
                log.info('Production email sent successfully');
            }
            catch (error) {
                log.error(error);
                throw new error_handler_1.BadRequesetError('Error sending email');
            }
        });
    }
}
exports.mailTransport = new MailTransport();
//# sourceMappingURL=mail.transport.js.map