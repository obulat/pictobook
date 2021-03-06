/* eslint-disable import/no-webpack-loader-syntax */
import ChevronUp from "!raw-loader!./svg/arrows/chevron-up.svg";
import ChevronDown from "!raw-loader!./svg/arrows/chevron-down.svg";
import ChevronLeft from "!raw-loader!./svg/arrows/chevron-left.svg";
import ChevronRight from "!raw-loader!./svg/arrows/chevron-right.svg";
import AngleUp from "!raw-loader!./svg/arrows/angle-up.svg";
import AngleDown from "!raw-loader!./svg/arrows/angle-down.svg";
import AngleLeft from "!raw-loader!./svg/arrows/angle-left.svg";
import AngleRight from "!raw-loader!./svg/arrows/angle-right.svg";
import CaretUp from "!raw-loader!./svg/arrows/caret-up.svg";
import CaretDown from "!raw-loader!./svg/arrows/caret-down.svg";
import CaretLeft from "!raw-loader!./svg/arrows/caret-left.svg";
import CaretRight from "!raw-loader!./svg/arrows/caret-right.svg";
import CcBy from "!raw-loader!./svg/cc/cc-by.svg";
import CcHeart from "!raw-loader!./svg/cc/cc-heart.svg";
import CcHeartFilled from "!raw-loader!./svg/cc/cc-heart-filled.svg";
import CcLogo from "!raw-loader!./svg/cc/cc-logo.svg";
import CcNc from "!raw-loader!./svg/cc/cc-nc.svg";
import CcNcEu from "!raw-loader!./svg/cc/cc-nc-eu.svg";
import CcNcJp from "!raw-loader!./svg/cc/cc-nc-jp.svg";
import CcNd from "!raw-loader!./svg/cc/cc-nd.svg";
import CcPd from "!raw-loader!./svg/cc/cc-pd.svg";
import CcPdm from "!raw-loader!./svg/cc/cc-pdm.svg";
import CcRemix from "!raw-loader!./svg/cc/cc-remix.svg";
import CcSa from "!raw-loader!./svg/cc/cc-sa.svg";
import CcSampling from "!raw-loader!./svg/cc/cc-sampling.svg";
import CcSamplingPlus from "!raw-loader!./svg/cc/cc-sampling-plus.svg";
import CcShare from "!raw-loader!./svg/cc/cc-share.svg";
import CcZero from "!raw-loader!./svg/cc/cc-zero.svg";
import Facebook from "!raw-loader!./svg/social-media/facebook.svg";
import Github from "!raw-loader!./svg/social-media/github.svg";
import Instagram from "!raw-loader!./svg/social-media/instagram.svg";
import Linkedin from "!raw-loader!./svg/social-media/linkedin.svg";
import Medium from "!raw-loader!./svg/social-media/medium.svg";
import Messenger from "!raw-loader!./svg/social-media/messenger.svg";
import Pinterest from "!raw-loader!./svg/social-media/pinterest.svg";
import Reddit from "!raw-loader!./svg/social-media/reddit.svg";
import Rss from "!raw-loader!./svg/social-media/rss.svg";
import Slack from "!raw-loader!./svg/social-media/slack.svg";
import Sms from "!raw-loader!./svg/social-media/sms.svg";
import Tumbler from "!raw-loader!./svg/social-media/tumbler.svg";
import Twitter from "!raw-loader!./svg/social-media/twitter.svg";
import Whatsapp from "!raw-loader!./svg/social-media/whatsapp.svg";
import Adjust from "!raw-loader!./svg/symbols/adjust.svg";
import Bars from "!raw-loader!./svg/symbols/bars.svg";
import BookmarkRegular from "!raw-loader!./svg/symbols/bookmark-regular.svg";
import BookmarkSolid from "!raw-loader!./svg/symbols/bookmark-solid.svg";
import Calendar from "!raw-loader!./svg/symbols/calendar.svg";
import Check from "!raw-loader!./svg/symbols/check.svg";
import CircleFilled from "!raw-loader!./svg/symbols/circle-filled.svg";
import CircleOutline from "!raw-loader!./svg/symbols/circle-outline.svg";
import Envelope from "!raw-loader!./svg/symbols/envelope.svg";
import Exclamation from "!raw-loader!./svg/symbols/exclamation.svg";
import ExternalLink from "!raw-loader!./svg/symbols/external-link.svg";
import Filter from "!raw-loader!./svg/symbols/filter.svg";
import Flag from "!raw-loader!./svg/symbols/flag.svg";
import Globe from "!raw-loader!./svg/symbols/globe.svg";
import Heart from "!raw-loader!./svg/symbols/heart.svg";
import Info from "!raw-loader!./svg/symbols/info.svg";
import Minus from "!raw-loader!./svg/symbols/minus.svg";
import Plus from "!raw-loader!./svg/symbols/plus.svg";
import Question from "!raw-loader!./svg/symbols/question.svg";
import Search from "!raw-loader!./svg/symbols/search.svg";
import Sliders from "!raw-loader!./svg/symbols/sliders.svg";
import Sort from "!raw-loader!./svg/symbols/sort.svg";
import Times from "!raw-loader!./svg/symbols/times.svg";

const angles = [ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  AngleUp, AngleDown, AngleLeft, AngleRight,
  CaretUp, CaretDown, CaretLeft, CaretRight]
const cc = [CcBy, CcHeart, CcHeartFilled, CcLogo, CcNc,
  CcNcEu, CcNcJp, CcNd, CcPd, CcPdm, CcRemix,
  CcSa, CcSampling, CcSamplingPlus, CcShare, CcZero]
const symbols = [ Whatsapp, Adjust, Bars, BookmarkRegular, BookmarkSolid,
  Calendar, Check, CircleFilled, CircleOutline, Envelope,
  Exclamation, ExternalLink, Filter, Flag, Globe, Heart,
  Info, Minus, Plus, Question, Search, Sliders, Sort, Times]
const socialMedia = [Facebook, Github, Instagram, Linkedin, Medium, Messenger,
  Pinterest, Reddit, Rss, Slack, Sms, Tumbler, Twitter]

const iconGroups = {
  'arrows': {
    'chevrons': {
      'chevron-up': ChevronUp,
      'chevron-down': ChevronDown,
      'chevron-left':ChevronLeft,
      'chevron-right':ChevronRight
    },
    'angles': {
      'angle-up': AngleUp,
      'angle-down': AngleDown,
      'angle-left': AngleLeft,
      'angle-right': AngleRight
    },
    'carets': {
      'caret-up': CaretUp,
      'caret-down': CaretDown,
      'caret-left': CaretLeft,
      'caret-right': CaretRight
    }
  },
  'symbols': {
    'shapes': {
      tick: Check,
      cross: Times,
      plus: Plus,
      minus: Minus,
      'circle-filled': CircleFilled,
      'circle-outline': CircleOutline
    },
    'hieroglyphs': {
     'globe': Globe,
      'info': Info,
      'exclamation': Exclamation,
      'external-link': ExternalLink,
      'search': Search,
      'sort': Sort,
      'filter': Filter,
      'sliders': Sliders,
      'flag': Flag,
      'question': Question,
      'adjust': Adjust,
      'bookmark-regular': BookmarkRegular,
      'bookmark-solid': BookmarkSolid,
      'bars': Bars,
      'envelope': Envelope,
      'rss': Rss,
      'heart': Heart
    }
  },
  'cc-licenses': {
    'standard': {
      'cc-zero': CcZero,
      'cc-sa': CcSa,
      'cc-nc': CcNc,
      'cc-logo': CcLogo,
      'cc-pd': CcPd,
      'cc-by': CcBy,
      'cc-nd': CcNd
    },
    'non-standard': {
      'cc-sampling': CcSampling,
      'cc-sampling-plus': CcSamplingPlus,
      'cc-remix': CcRemix,
      'cc-share': CcShare,
      'cc-nc-eu': CcNcEu,
      'cc-nc-jp': CcNcJp,
      'cc-pd-alt': CcPdm,
      'cc-heart': CcHeart,
      'cc-heart-filled': CcHeartFilled
    }
  },
  'social-media': {
    'facebook': Facebook,
    'github': Github,
    'instagram': Instagram,
    'linkedin': Linkedin,
    'medium': Medium,
    'messenger': Messenger,
    'pinterest': Pinterest,
    'reddit': Reddit,
    'rss': Rss,
    'slack': Slack,
    'sms': Sms,
    'tumbler': Tumbler,
    'twitter': Twitter,
    'whatsapp': Whatsapp
  },
}

const iconFiles = {
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'chevron-left':ChevronLeft,
  'chevron-right':ChevronRight,
  'angle-up': AngleUp,
  'angle-down': AngleDown,
  'angle-left': AngleLeft,
  'angle-right': AngleRight,
  'caret-up': CaretUp,
  'caret-down': CaretDown,
  'caret-left': CaretLeft,
  'caret-right': CaretRight,
  tick: Check,
  cross: Times,
  plus: Plus,
  minus: Minus,
  'circle-filled': CircleFilled,
  'circle-outline': CircleOutline,
  'globe': Globe,
  'info': Info,
  'exclamation': Exclamation,
  'external-link': ExternalLink,
  'search': Search,
  'sort': Sort,
  'filter': Filter,
  'sliders': Sliders,
  'flag': Flag,
  'question': Question,
  'adjust': Adjust,
  'bookmark-regular': BookmarkRegular,
  'bookmark-solid': BookmarkSolid,
  'bars': Bars,
  'envelope': Envelope,
  'heart': Heart,
  'cc-zero': CcZero,
  'cc-sa': CcSa,
  'cc-nc': CcNc,
  'cc-logo': CcLogo,
  'cc-pd': CcPd,
  'cc-by': CcBy,
  'cc-nd': CcNd,
  'cc-sampling': CcSampling,
  'cc-sampling-plus': CcSamplingPlus,
  'cc-remix': CcRemix,
  'cc-share': CcShare,
  'cc-nc-eu': CcNcEu,
  'cc-nc-jp': CcNcJp,
  'cc-pd-alt': CcPdm,
  'cc-heart': CcHeart,
  'cc-heart-filled': CcHeartFilled,
  'facebook': Facebook,
  'github': Github,
  'instagram': Instagram,
  'linkedin': Linkedin,
  'medium': Medium,
  'messenger': Messenger,
  'pinterest': Pinterest,
  'reddit': Reddit,
  'rss': Rss,
  'slack': Slack,
  'sms': Sms,
  'tumbler': Tumbler,
  'twitter': Twitter,
  'whatsapp': Whatsapp
}

export { ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  AngleUp, AngleDown, AngleLeft, AngleRight,
  CaretUp, CaretDown, CaretLeft, CaretRight,
  CcBy, CcHeart, CcHeartFilled, CcLogo, CcNc,
  CcNcEu, CcNcJp, CcNd, CcPd, CcPdm, CcRemix,
  CcSa, CcSampling, CcSamplingPlus, CcShare, CcZero,
  Facebook, Github, Instagram, Linkedin, Medium, Messenger,
  Pinterest, Reddit, Rss, Slack, Sms, Tumbler, Twitter,
  Whatsapp, Adjust, Bars, BookmarkRegular, BookmarkSolid,
  Calendar, Check, CircleFilled, CircleOutline, Envelope,
  Exclamation, ExternalLink, Filter, Flag, Globe, Heart,
  Info, Minus, Plus, Question, Search, Sliders, Sort, Times,
  angles, cc, symbols, socialMedia, iconFiles, iconGroups
}
