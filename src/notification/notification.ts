import {Link, Store} from '../store/model';
import {sendCaptchaDiscordMessage, sendDiscordMessage} from './discord';
import {sendCaptchaEmail, sendEmail} from './email';
import {sendCaptchaPushoverNotification, sendPushoverNotification} from './pushover';
import {sendCaptchaSMS, sendSms} from './sms';
import {playSound} from './sound';
import {sendDesktopNotification} from './desktop';
import {sendPushbulletNotification} from './pushbullet';
import {sendSlackMessage} from './slack';
import {sendTelegramMessage} from './telegram';
import {sendTweet} from './twitter';
import {sendTwilioMessage} from './twilio';

export function sendNotification(link: Link, store: Store) {
	// Priority
	playSound();
	sendEmail(link, store);
	sendSms(link, store);
	sendDesktopNotification(link, store);
	// Non-priority
	sendDiscordMessage(link, store);
	sendPushbulletNotification(link, store);
	sendPushoverNotification(link, store);
	sendSlackMessage(link, store);
	sendTelegramMessage(link, store);
	sendTweet(link, store);
	sendTwilioMessage(link, store);
}

export function sendCaptchaNotification(link: Link, store: Store) {
	// Priority
	sendCaptchaEmail(link, store);
	sendCaptchaSMS(link, store);
	// Non-priority
	sendCaptchaDiscordMessage(link, store);
	sendCaptchaPushoverNotification(link, store);
}
