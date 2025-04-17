import locationIcon from "@/public/assets/svg/location.svg"
import workIcon from "@/public/assets/svg/work.svg"
import lockCloseIcon from "@/public/assets/svg/lock-close.svg"
import lockOpenIcon from "@/public/assets/svg/lock-open.svg"
import shieldIcon from "@/public/assets/svg/shield.svg"
import bellBlackIcon from "@/public/assets/svg/bell-black.svg"
import globeIcon from "@/public/assets/svg/globe.svg"
import trashIcon from "@/public/assets/svg/trash.svg"
import shieldRoundIcon from "@/public/assets/svg/shield-round.svg"
import questionIcon from "@/public/assets/svg/question.svg"
import visa from "@/public/assets/images/profile/visa.png"
import master from "@/public/assets/images/profile/master.png"

import img2 from '@/public/assets/images/chat/img-2.png'
import img4 from '@/public/assets/images/chat/img-4.png'
import calendar from '@/public/assets/svg/calendar-blue.svg'
import wallet from '@/public/assets/svg/wallet-blue.svg'

export const user_personal_data = [
  {
    id: 1,
    title: "Personal Info",
    infoList: [
      {
        id: 101,
        icon: locationIcon,
        name: "My Address",
        linkUrl: "/profile/user-address"
      },
      {
        id: 102,
        icon: workIcon,
        name: "Payment Method",
        linkUrl: "/profile/user-payment"
      }
    ]
  },
  {
    id: 2,
    title: "Security",
    infoList: [
      {
        id: 201,
        icon: lockCloseIcon,
        name: "Change Password",
        linkUrl: "/profile/change-password"
      },
      {
        id: 202,
        icon: lockOpenIcon,
        name: "Forgot Password",
        linkUrl: "/profile/forgot-password"
      },
      {
        id: 203,
        icon: shieldIcon,
        name: "Security",
        linkUrl: "/profile/security"
      },
      {
        id: 204,
        icon: bellBlackIcon,
        name: "Notifications",
        linkUrl: "/profile/notifications"
      }
    ]
  },
  {
    id: 3,
    title: "General",
    infoList: [
      {
        id: 301,
        icon: globeIcon,
        name: "Language",
        linkUrl: "/profile/user-language"
      },
      {
        id: 302,
        icon: trashIcon,
        name: "Clear Cache",
        linkUrl: "#",
        size: "88 MB"
      }
    ]
  },
  {
    id: 4,
    title: "About",
    infoList: [
      {
        id: 401,
        icon: shieldRoundIcon,
        name: "Legal and Policies",
        linkUrl: "/profile/legal-policy"
      },
      {
        id: 402,
        icon: questionIcon,
        name: "Help & Support",
        linkUrl: "/profile/help-support",
      }
    ]
  }
]

export const address_data = [
  {
    id: 1,
    name: "Andy Andrew",
    phone: "+1 234 567 890",
    address: "1234 Your Road No #6789 <br> Your City, Country"
  },
  {
    id: 2,
    name: "Elevenia Kalia",
    phone: "+1 234 567 890",
    address: "1234 Your Road No #6789 <br> Your City, Country"
  }
]

export const payment_data = [
  {
    id: 1,
    name: "BCA (Bank Central Asia)",
    cardNo: "•••• •••• •••• 12345",
    author: "Brooklyn Simmons",
    picture: visa
  },
  {
    id: 2,
    name: "ACB (Asia Central Bank)",
    cardNo: "•••• •••• •••• 12345",
    author: "Brooklyn Simmons",
    picture: master
  }
]

export const security_data = [
  {
    id: 1,
    title: "Face ID",
  },
  {
    id: 2,
    title: "Remember Password"
  },
  {
    id: 3,
    title: "Touch ID"
  }
]

export const notification_data = [
  {
    id: 1,
    title: "Payment Reminder"
  },
  {
    id: 2,
    title: "Schedule Reminder"
  },
  {
    id: 3,
    title: "Message"
  },
  {
    id: 4,
    title: "Call"
  }
]

export const policy_data = [
  {
    id: 1,
    title: "Terms",
    policies: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames."
    ]
  },
  {
    id: 2,
    title: "Changes to the Service and/or Terms",
    policies: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames."
    ]
  }
]

export const faq_data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  }
]

export const all_notification_data = [
  {
    id: 1,
    title: "today",
    items: [
      {
        id: 101,
        picture: img2,
        text: "There's an incoming message from Richard Mandowen",
        time: "2 hours Ago"
      },
      {
        id: 102,
        picture: img4,
        text: "Outgoing call from Richar Kandowen",
        time: "3 hours Ago"
      },
      {
        id: 103,
        picture: calendar,
        text: "Don't forget to schedule your vacation to the Taj Mahal, <span>August 25, 2022</span>",
        time: "4 hours Ago"
      }
    ]
  },
  {
    id: 2,
    title: "yesterday",
    items: [
      {
        id: 201,
        picture: wallet,
        text: "Your payment for the holiday ticket to the taj mahal was successful",
        time: "1 day Ago"
      },
      {
        id: 202,
        picture: wallet,
        text: "Your payment for booking The Lalit New Delhi hotel was successful",
        time: "1 day Ago"
      }
    ]
  }
]