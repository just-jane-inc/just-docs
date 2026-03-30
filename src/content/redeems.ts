import type {ComponentProps} from "astro/types";
// @ts-ignore
import RedeemCard from './components/RedeemCard.astro';
type RedeemProps = ComponentProps<typeof RedeemCard>;

// Helpers to make manually configured icon URLs easier to read.
const broadcasterId = '1112386096';
const iconBaseUrl = 'https://static-cdn.jtvnw.net/custom-reward-images'
const defaultIcon = new URL(`${iconBaseUrl}/default-2.png`)
const icons = {
    '1x': 'custom-2.png',
    '2x': 'custom-4.png'
}

const redeemIcon = (
    redeemIdentifier: string,
    size: keyof icons = '1x'
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
        title: 'Just Zshoom',
        anchor: '#just-zshoom',
        iconBackgroundColor: 'rgb(189, 168, 255)',
        iconUrl: defaultIcon,
        channelPoints: 1
    },
    {
        title: 'Just Clock In',
        anchor: '#just-clock-in',
        iconBackgroundColor: 'rgb(122, 162, 247)',
        iconUrl: redeemIcon('f7561313-f967-46f5-88f6-945f00444c08/78741990-42f9-4015-a3a8-154e3ff9744e'),
        channelPoints: 1
    },
    {
        title: 'Just Juniper Pats',
        anchor: '#just-juniper-pats',
        iconBackgroundColor: 'rgb(67, 47, 106)',
        iconUrl: redeemIcon('fe75c4b6-70cc-4bf0-9255-cb77b6687919/d5deb9a5-1038-4286-b557-c7b59753844e'),
        channelPoints: 1
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
        title: 'Just Stay Positive',
        anchor: '#just-stay-positive',
        iconBackgroundColor: 'rgb(158, 206, 106)',
        iconUrl: redeemIcon('7eadceb8-cf0e-4e88-9490-09eaf4012c12/0faae6ac-1b47-44be-b330-3b8c6a76f2cd'),
        channelPoints: '1,024'
    },
    {
        title: 'Just Switch Model',
        anchor: '#just-switch-model',
        iconBackgroundColor: 'rgb(125, 207, 255)',
        iconUrl: redeemIcon('cfc8d5df-d82f-478a-a0b1-0c3bce729595/c943437f-6df9-49bd-804d-65580c39cb83'),
        channelPoints: '2,048'
    },
    {
        title: 'Just Spoken for Me',
        anchor: '#just-spoken-for-me',
        iconBackgroundColor: 'rgb(222, 173, 255)',
        iconUrl: redeemIcon('0f0367b0-155a-4ea8-99c1-0bf7f6e73354/6e2ea5e8-7737-40aa-a4fa-41d600fa03aa'),
        channelPoints: '4,096'
    },
    {
        title: 'Just Draw Me Like One of Your Cat Girls',
        anchor: '#just-draw-me-like-one-of-your-cat-girls',
        iconBackgroundColor: 'rgb(107, 44, 157)',
        iconUrl: redeemIcon('de33f629-f96f-4cb3-82dc-e8f6419acfc9/585d9a63-17bc-4166-9564-461ec9cd99ca'),
        channelPoints: '4,096'
    },
    {
        title: 'Just Let Me Speak',
        anchor: '#just-let-me-speak',
        iconBackgroundColor: 'rgb(128, 218, 215)',
        iconUrl: redeemIcon('e5c0380c-2afd-4796-8296-d7212b2f2144/4bd25155-737e-4abc-8c96-a4fbc8861b4d'),
        channelPoints: '32,768'
    },
    {
        title: 'Just Sleep',
        anchor: '#just-sleep',
        iconBackgroundColor: 'rgb(86, 95, 137)',
        iconUrl: redeemIcon('1310fdc6-13a3-4e61-b9c8-ecf47e3d4e6a/c44fbf6e-9449-4395-858f-b00ea3e036ed'),
        channelPoints: '131,072'
    },
    {
        title: 'Just Unit Test',
        anchor: '#just-unit-test',
        iconBackgroundColor: 'rgb(192, 202, 245)',
        iconUrl: redeemIcon('fa193225-0f67-403a-974a-1eac1a2d4d96/e5c98bdd-c628-4d4c-b1b8-f6f1e653b170'),
        channelPoints: '131,072'
    }
]