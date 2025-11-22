export interface BlogPost {
  id: string;
  title: {
    en: string;
    ru: string;
  };
  date: string;
  excerpt: {
    en: string;
    ru: string;
  };
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
      ru: "Бета-релиз titus_antispam_bot",
    },
    date: "2025-11-22",
    excerpt: {
      en: "Protecting public Telegram groups from spam without CAPTCHA",
      ru: "Рассказываем о том, как Титус защищает группы от спама без капчи",
    },
    content: {
      en: `
        <section>
          <section>
            <h2>Protecting public Telegram groups from spam without CAPTCHA</h2>
            <p>Groups gaining popularity face the spam problem. The number of spammers now reaches tens of thousands, and thousands of new ones are automatically registered every day.</p>

            <p>Administrators face a choice: make the group private or put a CAPTCHA on entry. Both solutions lead to losing members.</p>

            <p>Titus offers a third way — spam protection for Telegram public groups without CAPTCHA.</p>
          </section>
          
          <section>
            <h3>How do we achieve this result?</h3>

            <p>Titus applies three levels of protection:</p>

            <section>
              <h4><strong>Ban on entry by known spammer database</strong></h4>

              <p>Every new member is checked against reliable public spammer lists. If an account fails the check, it's immediately blocked and removed from the group, without even having a chance to write anything.</p>

              <p>But this method has a drawback: a spam bot may not have made it into the databases yet, so message analysis is applied:</p>
            </section>

            <section>
              <h4><strong>Text analysis of messages</strong></h4>

              <p>If a spam bot hasn't made it into the database yet, it won't be banned on entry, but its messages will be analyzed for patterns typical of spam.</p>

              <p>If a message fails the check, it's instantly deleted from the group.</p>

              <p>If a message passes the check, the member is added to the verified list and is no longer checked. The allowlist is maintained for all groups using Titus, so if a member has already passed verification in another group, they won't be banned in yours either.</p>
            </section>

            <section>
              <h4><strong>Image analysis (alpha feature)</strong></h4>

              <p>Titus supports another spam distribution scenario, when a spam bot sends just an image without a caption.</p>

              <p>This feature is currently in alpha mode: the bot is gradually accumulating examples of spam images to recognize text on them through a neural network in the future. For now, most such messages are allowed through, but this is temporary.</p>
            </section>
          </section>
          
          <section>
            <h3>Why entry without CAPTCHA matters</h3>

            <p>Passing a CAPTCHA or entry by invite negatively affects group dynamics — communication starts with distrust of the member, they have to prove they're "not a camel". Titus strives to be strict with bots and friendly to people.</p>

            <p>The beta version is already running stably in several groups, handling dozens of spam attempts daily — while members don't even notice its work.</p>
          </section>

          <hr/>

          <section>
            <h3><strong>Protect your group from spam without complicating members' lives</strong></h3>
            <p>Add <a href="https://t.me/titus_antispam_bot">@titus_antispam_bot</a> to your public group, grant permissions to delete messages and ban users — and let your community stay clean, open, and friendly.</p>

            <p><strong>Titus — spam protection for Telegram without compromises.</strong></p>
          </section>
        </section>
      `,
      ru: `
        <section>
          <section>
            <h2>Защита публичных групп в Telegram от спама без капчи</h2>
            <p>Набирающие популярность группы сталкиваются с проблемой спама. Количество спамеров сейчас насчитывает десятки тысяч и каждый день автоматически регистируются тысяи новых.</p>

            <p>Перед администраторами стоит выбор: сделать группу приватной или поставить капчу на вход. Оба этих решения приводят к потере участников</p>

            <p>Титус предлагает третий путь — защита от спама в Telegram без капчи для публичных групп.</p>
          </section>
          
          <section>
            <h3>Как мы достигаем такого результата?</h3>

            <p>Титус применяет три уровня защиты:</p>

            <section>
              <h4><strong>Бан на входе по базе известных спамеров</strong></h4>

              <p>Каждый новый участник проверяется по надёжным публичным спискам спамеров. Если аккаунт не проходит проверку, то сразу блокируется и удаляется из группы, даже не успев ничего написать.</p>

              <p>Но у этого способа есть недостаток: спам бот может еще не успеть попасть в базы, тогда применяется анализ сообщений:</p>
            </section>

            <section>
              <h4><strong>Текстовый анализ сообщений</strong></h4>

              <p>Если спам бот еще не успел попасть в базу, то он не будет забанен на входе, но его сообщения будут анализироваться на соответствие паттернам, присущим спаму.</p>

              <p>Если сообщение не проходит проверку, то моментально удаляется из группы.</p>

              <p>Если сообщение проходит проверку, то участник добавляется в список проверенных и больше не проверяется. Белый список поддерживается для всех групп, использующих Титуса, поэтому если участник уже прошел проверку в другой группе, то он не будет забанет и в вашей.</p>
            </section>

            <section>
              <h4><strong>Анализ изображений (alpha-функция)</strong></h4>

              <p>Титус поддерживает еще один сценарий распространение спама, когда спам бот присылает просто изображение без подписи.</p>

              <p>Сейчас эта функция в альфа-режиме: бот постепенно накапливает примеры спама-картинок, чтобы в будущем распознавать текст на них через нейросеть. Пока большинство таких сообщений пропускаются, но это временно.</p>
            </section>
          </section>
          
          <section>
            <h3>Почему вход без капчи — это важно?</h3>

            <p>Прохождение капчи или вход по инвайту негативно сказывается на групповой динамике — общение начинается с недоверия к участнику, ему приходится доказывать что он «не верблюд». Титус старается быть строгим к ботам и дружелюбным к людям.</p>

            <p>Бета-версия уже стабильно работает в нескольких группах, обрабатывая десятки попыток спама ежедневно — при этом участники даже не замечают его работы.</p>
          </section>

          <hr/>

          <section>
            <h3><strong>Защитите группу от спама, не усложняя жизнь участникам</strong></h3>
            Добавьте <a href="https://t.me/titus_antispam_bot">@titus_antispam_bot</a> в свою публичную группу, дайте права на удаление сообщений и блокировку пользователей — и пусть ваше сообщество остаётся чистым, открытым и дружелюбным.</p>

            <p><strong>Титус — защита от спама в Telegram без компромиссов.</strong></p>
          </section>
        </section>
      `,
    },
  },
];
