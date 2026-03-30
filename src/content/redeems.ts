import type {ComponentProps} from "astro/types";
// @ts-ignore
import RedeemCard from './components/RedeemCard.astro';
type RedeemProps = ComponentProps<typeof RedeemCard>;

// Helpers to make manually configured icon URLs easier to read.
const broadcasterId = '1112386096';
const iconBaseUrl = 'https://static-cdn.jtvnw.net/custom-reward-images'
const defaultIcon = new URL(`${iconBaseUrl}/default-2.png`)
const icons: Record<'1x'|'2x', string> = {
    '1x': 'custom-2.png',
    '2x': 'custom-4.png'
}

const redeemIcon = (
    redeemIdentifier: string,
    size: keyof typeof icons = '1x'
) => new URL(`${iconBaseUrl}/${broadcasterId}/${redeemIdentifier}/${icons[size]}`)

// @todo Let this list be populated by the Twitch API.
export const redeems: RedeemProps[] = [
    {
        title: 'Just Pyramid Scheme',
        anchor: '#just-pyramid-scheme',
        iconBackgroundColor: 'rgb(192, 202, 245)',
        iconUrl: redeemIcon('c5989822-767f-4f01-8973-a1898e09bfc0/9797a628-5709-4d46-b6a6-26a15e6f02d9'),
        channelPoints: '2<sup>n−1</sup>'
    },
    {
        title: 'Just Clock In',
        anchor: '#just-clock-in',
        iconBackgroundColor: 'rgb(122, 162, 247)',
        iconUrl: redeemIcon('f7561313-f967-46f5-88f6-945f00444c08/78741990-42f9-4015-a3a8-154e3ff9744e'),
        channelPoints: 1
    },
    {
        title: 'Just Clock Out',
        anchor: '#just-clock-out',
        iconBackgroundColor: 'rgb(255, 158, 100)',
        iconUrl: redeemIcon('6da4ae7c-9540-450f-ac7f-38d8bdbcf547/69dc474c-0cdf-49dd-94d0-bbd099c68c8a'),
        channelPoints: 2
    },
    {
        title: 'Just Zshoom',
        anchor: '#just-zshoom',
        iconBackgroundColor: 'rgb(189, 168, 255)',
        iconUrl: redeemIcon('47b9d636-4e9e-4587-8f0d-8b28a654e9dd/844bd8db-095e-4a87-8bfe-b6792d52927e'),
        channelPoints: 4
    },
    {
        title: 'Just Juniper Pats',
        anchor: '#just-juniper-pats',
        iconBackgroundColor: 'rgb(67, 47, 106)',
        iconUrl: redeemIcon('fe75c4b6-70cc-4bf0-9255-cb77b6687919/d5deb9a5-1038-4286-b557-c7b59753844e'),
        channelPoints: 4
    },
    {
        title: 'Just Gamba',
        anchor: '#just-gamba',
        iconBackgroundColor: "rgb(21, 8, 41)",
        iconUrl: redeemIcon("e4d81ee0-90fb-402d-9aaa-0c0f4cb81cc9/53e06d20-196b-42a7-b163-b42e637a898d"),
        channelPoints: 64
    },
    {
        title: 'Just Hydrate',
        anchor: '#just-hydrate',
        iconBackgroundColor: 'rgb(125, 207, 255)',
        iconUrl: redeemIcon('0cccb3d9-4cdc-425b-b2e7-6051264f2383/0d4addf9-70aa-4d52-b0b3-8d5556a67df6'),
        channelPoints: 64
    },
    {
        title: 'Just Write a Comment',
        anchor: '#just-write-a-comment',
        iconBackgroundColor: 'rgb(192, 202, 245)',
        iconUrl: redeemIcon('cc88a833-7707-49a0-b198-18a116205aa0/1ed05e38-45de-4391-8d11-adbab6a38ca6'),
        channelPoints: 64
    },
    {
        title: 'Just Stretch',
        anchor: '#just-stretch',
        iconBackgroundColor: 'rgb(250, 179, 255)',
        iconUrl: redeemIcon('1170947b-a7ac-445a-b80e-91c735d858d8/4e7a2a9e-dbad-41da-9f6d-db4e5398de28'),
        channelPoints: 128
    },
    {
        title: 'Just Link',
        anchor: '#just-link',
        iconBackgroundColor: 'rgb(192, 202, 245)',
        iconUrl: redeemIcon('503cc41c-67a1-4f71-b1e4-b6ce9f493cbb/44bcc186-5bdb-47a4-ac29-bee1fd242e9b'),
        channelPoints: 128
    },
    {
        title: 'Just Word Cloud',
        anchor: '#just-word-cloud',
        iconBackgroundColor: 'rgb(222, 173, 255)',
        iconUrl: redeemIcon('7620ff65-c879-4440-aae8-f248d10f8b0a/8eb1e7dd-1f01-4e83-b2d5-172e536e1cfe'),
        channelPoints: 128
    },
    {
        title: 'Just Commit',
        anchor: '#just-commit',
        iconBackgroundColor: 'rgb(180, 249, 248)',
        iconUrl: redeemIcon('d0a6c37d-2ecd-44c8-8aa6-f7ab756025af/e0963e92-0489-4484-91d5-e1054b2a1653'),
        channelPoints: 128
    },
    {
        title: 'Just Suggestions',
        anchor: '#just-suggestions',
        iconBackgroundColor: 'rgb(115, 218, 202)',
        iconUrl: redeemIcon('ec8b4c0c-dcaa-4163-b437-6497becdc345/b24618ce-3659-4aaf-9bf8-32b9df18c153'),
        channelPoints: 128
    },
    {
        title: 'Just Say Hey Jill',
        anchor: '#just-say-hey-jill',
        iconBackgroundColor: 'rgb(154, 165, 206)',
        iconUrl: redeemIcon('0242ca8e-fe0c-42c2-86f2-6db9d4509a7a/6a5f2921-fb9c-4f30-b465-c6955263519d'),
        channelPoints: 512
    },
    {
        title: 'Just Pay Attention to Me',
        anchor: '#just-pay-attention-to-me',
        iconBackgroundColor: 'rgb(222, 173, 255)',
        iconUrl: redeemIcon('1b497994-d9d1-48bc-91a2-fda8ae4a4309/708f161d-ea84-46ae-a842-9bd7f5ece094'),
        channelPoints: 512
    },
    {
        title: 'Just Nya',
        anchor: '#just-nya',
        iconBackgroundColor: 'rgb(192, 202, 245)',
        iconUrl: redeemIcon('d5886b0a-e2c8-43c6-9b6f-9edf6648d8e5/f196bafb-a11b-44e7-8e22-c921f10f6b35'),
        channelPoints: '1,024'
    },
    {
        title: 'Just Bark',
        anchor: '#just-bark',
        iconBackgroundColor: 'rgb(192, 202, 245)',
        iconUrl: defaultIcon,
        channelPoints: '4,096'
    },
    {
        title: 'Just Spoken for Me',
        anchor: '#just-spoken-for-me',
        iconBackgroundColor: 'rgb(222, 173, 255)',
        iconUrl: redeemIcon('0f0367b0-155a-4ea8-99c1-0bf7f6e73354/6e2ea5e8-7737-40aa-a4fa-41d600fa03aa'),
        channelPoints: '4,096'
    },
    {
        title: 'Just Ara Ara',
        anchor: '#just-ara-ara',
        iconBackgroundColor: 'rgb(222, 173, 255)',
        iconUrl: defaultIcon,
        channelPoints: '8,192'
    },
    {
        title: 'Just Let Me Speak',
        anchor: '#just-let-me-speak',
        iconBackgroundColor: 'rgb(128, 218, 215)',
        iconUrl: redeemIcon('e5c0380c-2afd-4796-8296-d7212b2f2144/4bd25155-737e-4abc-8c96-a4fbc8861b4d'),
        channelPoints: '32,768'
    },
]