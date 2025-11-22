export const translations = {
  en: {
    hero: {
      title1: "Titus",
      title2: "Anti-spam bot for Telegram",
      description:
        "Protection of public Telegram groups from spam without captcha. Uses allowlists and blocklists of users, as well as text and image analysis",
      cta: "Protect Your Group",
      badge: "Free • Quick Setup • Machine Learning",
    },
    features: {
      title: "Triple Layer Protection",
      subtitle: "The bot reliably protects your groups from spam, 24/7",
      feature1: {
        title: "Ban on Entry Based on Known Spammers Database",
        description:
          "Checks all new members against an extensive database of known spammers, ensuring your group's security",
      },
      feature2: {
        title: "Text Analysis Model",
        description:
          "Our own ML model analyzes messages in real-time to identify and remove spam before it harms your community",
      },
      feature3: {
        title: "Image Spam Detection",
        description:
          "Images without captions are also analyzed for spam.",
        badge: "Alpha Feature",
      },
    },
    instructions: {
      title: "Protect your group in 5 simple steps",
      subtitle: "Simply add the bot to your group and grant the necessary permissions",
      step1: {
        step: "Step 1",
        title: "Find the titus_antispam_bot",
        description:
          "Find @titus_antispam_bot in Telegram or click the button above to open a direct chat.",
      },
      step2: {
        step: "Step 2",
        title: "Add to Group",
        description:
          "Click 'Add to Group' and select the group you want to protect from the list.",
      },
      step3: {
        step: "Step 3",
        title: "Make it Administrator",
        description:
          "Go to your group settings, select 'Administrators', and promote Titus to admin.",
      },
      step4: {
        step: "Step 4",
        title: "Grant Delete Messages Permission",
        description:
          "Enable 'Delete Messages' permission so Titus can automatically remove spam.",
      },
      step5: {
        step: "Step 5",
        title: "Grant Ban Users Permission",
        description:
          "Enable 'Ban Users' permission so Titus can remove known spammers from your group.",
      },
    },
    cta: {
      title: "Ready for unprecedented protection of your community?",
      description:
        "Join the community of administrators who trust titus_antispam_bot to protect their groups from spam",
      button: "It's Free",
    },
    footer: {
      title: "Titus",
      subtitle: "Telegram Group Guardian",
      platform: "Built on",
      platformName: "Titorelli Platform",
      copyright: "Titus. All rights reserved.",
    },
    blog: {
      title: "Blog",
      subtitle: "Our news and useful articles",
      backToIndex: "Back to Blog",
      notFound: "Article not found",
    },
  },
  ru: {
    hero: {
      title1: "Titus",
      title2: "Антиспам бот для Telegram",
      description:
        "Защита публичных групп в Telegram от спама без капчи. Используются белые и черные списки пользователей, а также анализ текста и изображений",
      cta: "Защитить группу",
      badge: "Бесплатно • Быстрая настройка • Машинное обучение",
    },
    features: {
      title: "Тройной уровень защиты",
      subtitle: "Бот надежно защищтит ваши группы от спама, 24×7",
      feature1: {
        title: "Бан на входе по базе известныхспамеров",
        description:
          "Проверяет всех новых участников по обширной базе известных спамеров, обеспечивая безопасность вашей группы",
      },
      feature2: {
        title: "Модель анализа текста",
        description:
          "Cобственная ML-модель анализирует сообщения в реальном времени, дабы выявить и удалить спам до того, как он навредит вашему сообществу",
      },
      feature3: {
        title: "Определение спама на изображениях",
        description:
          "Изображения без подписей так же анализируются на предмет спама.",
        badge: "Alpha-функция",
      },
    },
    instructions: {
      title: "Защитите свою группу за 5 простых шагов",
      subtitle: "Просто добавьте бота в группу и выдайте нужные права",
      step1: {
        step: "Шаг 1",
        title: "Найдите бота titus_antispam_bot",
        description:
          "Найдите @titus_antispam_bot в Telegram или нажмите кнопку выше, чтобы открыть прямой чат.",
      },
      step2: {
        step: "Шаг 2",
        title: "Добавьте в группу",
        description:
          "Нажмите 'Добавить в группу' и выберите группу, которую хотите защитить, из списка.",
      },
      step3: {
        step: "Шаг 3",
        title: "Сделайте администратором",
        description:
          "Перейдите в настройки группы, выберите 'Администраторы' и назначьте Titus администратором.",
      },
      step4: {
        step: "Шаг 4",
        title: "Разрешите удаление сообщений",
        description:
          "Включите права 'Удаление сообщений', чтобы Titus мог автоматически удалять спам.",
      },
      step5: {
        step: "Шаг 5",
        title: "Разрешите блокироку пользователей",
        description:
          "Включите права 'Блокировка пользователей', чтобы Titus мог удалять известных спамеров из вашей группы.",
      },
    },
    cta: {
      title: "Готовы к беспрецедентной защите своего сообщества?",
      description:
        "Присоединяйтесь к сообществу администраторов, доверяющих titus_antispam_bot защиту своих групп",
      button: "Это бесплатно",
    },
    footer: {
      title: "Titus",
      subtitle: "Защитник Telegram групп",
      platform: "Создано на базе",
      platformName: "Titorelli Platform",
      copyright: "Titus. Все права защищены.",
    },
    blog: {
      title: "Блог",
      subtitle: "Наши новости и полезные статьи",
      backToIndex: "Вернуться к блогу",
      notFound: "Статья не найдена",
    },
  },
} as const;

export type Language = keyof typeof translations;
