import envelope from "../../assets/images/email.svg";
import placeholder from "../../assets/images/location.svg";
import phone from "../../assets/images/phone-call.svg";
import reading from "../../assets/images/reading.svg";
import stories from "../../assets/images/short.svg";
import folder from "../../assets/images/folder.svg";
import submissions from "../../assets/images/submissions.svg";
import rules from "../../assets/images/rules.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import CopyrightIcon from "@material-ui/icons/Copyright";

export const column1 = [
  { title: "Guidelines", image: rules, link: "/directions" },
  {
    title: "Submissions",
    image: submissions,
    link: "/submissions",
  },
  {
    title: "Issues",
    image: folder,
    link: "/book-series",
  },
];
export const column2 = [
  { title: "Stories", image: rules, link: "/short-stories" },
  { title: "Poems", image: rules, link: "/poems" },
  { title: "Essays", image: rules, link: "/essays" },
  { title: "Interviews", image: rules, link: "/interviews" },
  { title: "Gossip", image: rules, link: "/gossip" },
  { title: "Lit news", image: rules, link: "/lit-news" },
];

export const column3 = [
  { title: "teahouseeditor@gmail.com", image: envelope },
  { title: "Kigali, Rwanda", image: placeholder },
  { title: "+250788595704", image: phone },
];

export const row4 = [
  { title: "instagram", Icon: InstagramIcon, link: "/short-stories" },
  { title: "twitter", Icon: TwitterIcon, link: "/poems" },
  { title: "facebook", Icon: FacebookIcon, link: "/essays" },
  { title: "Teahousemagazine 2020", Icon: CopyrightIcon },
];
