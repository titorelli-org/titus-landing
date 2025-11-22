export interface BlogPost {
  id: string;
  title: {
    en: string;
    ru: string;
  };
  date: string;
  content: {
    en: string;
    ru: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "beta-release",
    title: {
      en: "Titus-Bot: first beta release",
      ru: "Titus-Bot: первый бета-релиз",
    },
    date: "2024-12-15",
    content: {
      en: `
        <h2>Spam Protection for Telegram Groups — Without CAPTCHA</h2>
        <p>Spam in Telegram has become a constant headache for public group admins. Most solutions force a tough choice: either lock the group behind CAPTCHAs and lose real members, or let spam take over. <strong>Titus-Bot offers a better way: reliable protection from spam in Telegram — without CAPTCHA.</strong></p>
        <p>This isn't just another spam bot. Titus-Bot was built from real-world moderation experience in active technical communities. And as of today, it's available in beta for admins of public Telegram groups.</p>
        
        <h3>How It Works</h3>
        <p>Titus-Bot uses a three-layer defense system:</p>
        <ol>
          <li><strong>Instant blocking via spam databases</strong><br/>
          Every new member is checked against trusted public spam lists — CAS (Combot Anti-Spam) and Lols. If a user appears in either database, they're blocked immediately upon joining — before they can send a single message. These lists are highly accurate: if someone's flagged, they're virtually guaranteed to be a spammer.</li>
          
          <li><strong>Text-based spam detection</strong><br/>
          For new bots not yet in databases, Titus-Bot analyzes message content using its own spam corpus. If a message matches known spam patterns, it's deleted — but the user isn't banned. This gives real people a chance to rephrase and participate. Spam bots, in contrast, keep repeating the same message and eventually get filtered out.<br/>
          Legitimate users rarely even notice the filter — it's that precise. And once someone passes the text check, they're added to a <strong>global allowlist</strong>, so they'll never be flagged again — in any group using Titus-Bot.</li>
          
          <li><strong>Image-based spam detection (alpha)</strong><br/>
          Some spammers now send images with text instead of plain messages. This feature is currently in alpha: Titus-Bot is collecting examples to train an image-analysis model. For now, such images are allowed through, but the system is learning — and full image-based filtering is coming soon.</li>
        </ol>
        
        <h3>Why "No CAPTCHA" Matters</h3>
        <p>CAPTCHAs and "click-to-verify" buttons create friction — especially in professional communities where speed and ease matter. Titus-Bot proves that a <strong>Telegram antispam</strong> solution can be strict with bots and respectful to humans.</p>
        <p>The beta is already running smoothly in several groups, silently handling dozens of spam attempts daily — while keeping the experience seamless for real members.</p>
        
        <hr/>
        
        <p><strong>Ready to eliminate spam — without making life harder for your community?</strong><br/>
        Add <a href="https://t.me/titus_antispam_bot">@titus_antispam_bot</a> to your public group, grant it "Delete messages" and "Ban users" permissions (nothing else is needed), and let your community stay clean, open, and welcoming.</p>
        <p><strong>Titus-Bot: protection from spam in Telegram — no compromises.</strong></p>
      `,
      ru: `
        <h2>Защита Telegram-групп от спама без капчи</h2>
        <p>Спам в Telegram стал повседневной проблемой для публичных групп. Многие администраторы вынуждены выбирать: либо ставить капчу и терять новых участников, либо терпеть потоки рекламы и ботов. Titus-Bot предлагает третий путь — <strong>надёжная защита от спама в Telegram без капчи</strong>.</p>
        <p>Это не просто ещё один спам бот. Titus-Bot сочетает проверенные методы и собственный опыт модерации реальных технических сообществ. И с сегодняшнего дня он доступен в бета-версии для администраторов публичных групп.</p>
        
        <h3>Как это работает?</h3>
        <p>Titus-Bot использует три уровня защиты:</p>
        <ol>
          <li><strong>Мгновенная блокировка по спам-базам</strong><br/>
          Каждый новый участник проверяется по надёжным публичным спискам спамеров — CAS (Combot Anti-Spam) и Lols . Если аккаунт уже помечен как спамер, он блокируется сразу при входе — не успев отправить ни одного сообщения.</li>
          
          <li><strong>Текстовый анализ сообщений</strong><br/>
          Если спамер новый и ещё не в базах, вступает в игру ML-модель. Она сравнивает текст сообщения с собственной базой реального спама. При совпадении — сообщение удаляется, но пользователь <strong>не банится</strong>. Это даёт шанс легитимным участникам переформулировать сообщение. Спам-боты, напротив, повторяют одно и то же — и в итоге отсеиваются.</li>
          
          <li><strong>Глобальный белый список</strong><br/>
          Как только пользователь доказывает, что он не спамер (отправляя допустимое сообщение), он попадает в список проверенных. Такой участник больше не будет подвергаться проверкам — ни в вашей группе, ни в любой другой, где работает Titus-Bot.</li>
        </ol>
        <p>В будущем появится и третий слой — анализ изображений. Сейчас эта функция в альфа-режиме: бот постепенно накапливает примеры спама-картинок, чтобы в будущем распознавать текст на них через нейросеть. Пока такие сообщения пропускаются, но это временно.</p>
        
        <h3>Почему без капчи — это важно?</h3>
        <p>Капчи и кнопки «Я не робот» отпугивают реальных людей — особенно в профессиональных сообществах, где ценится скорость и удобство. Titus-Bot доказывает: <strong>антиспам Telegram-решение может быть строгим к ботам и дружелюбным к людям</strong>.</p>
        <p>Бета-версия уже стабильно работает в нескольких группах, обрабатывая десятки попыток спама ежедневно — при этом участники даже не замечают его работы.</p>
        
        <hr/>
        
        <p><strong>Готовы избавиться от спама — не усложняя жизнь своим пользователям?</strong><br/>
        Добавьте <a href="https://t.me/titus_antispam_bot">@titus_antispam_bot</a> в свою публичную группу, дайте права на удаление сообщений и блокировку пользователей — и пусть ваше сообщество остаётся чистым, открытым и комфортным.</p>
        <p><strong>Titus-Bot — защита от спама в Telegram без компромиссов.</strong></p>
      `,
    },
  },
];
