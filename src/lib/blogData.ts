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
    id: "introducing-titus",
    title: {
      en: "Introducing Titus: Your AI-Powered Telegram Guardian",
      ru: "Представляем Titus: Ваш AI-защитник Telegram",
    },
    date: "2024-11-15",
    content: {
      en: `
        <h2>The Problem with Telegram Spam</h2>
        <p>Telegram groups have become increasingly popular for communities, but with growth comes challenges. Spam messages, bot attacks, and malicious users can quickly turn a thriving community into a chaotic mess.</p>
        
        <h2>Our Solution</h2>
        <p>That's why we built <strong>Titus</strong> - an AI-powered bot that works 24/7 to keep your Telegram groups clean and safe. Using cutting-edge machine learning technology, Titus can:</p>
        
        <ul>
          <li>Detect spam messages in real-time</li>
          <li>Check new members against known spammer databases</li>
          <li>Identify spam hidden in images (alpha feature)</li>
        </ul>
        
        <figure>
          <picture>
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800" alt="AI Technology" />
          </picture>
          <figcaption>Powered by advanced AI and machine learning</figcaption>
        </figure>
        
        <h2>How It Works</h2>
        <p>Titus uses a proprietary ML model trained on millions of spam messages. When a new message is posted in your group, Titus analyzes it in milliseconds and takes action if needed.</p>
        
        <blockquote>
          "Since adding Titus to our community, we've seen a 95% reduction in spam messages. It's like having a dedicated moderator that never sleeps." - Community Admin
        </blockquote>
        
        <h3>Getting Started</h3>
        <p>Setting up Titus takes less than 5 minutes. Simply add the bot to your group, grant it admin permissions, and you're protected. <a href="https://t.me/YourTitusBot">Try Titus today</a> and experience the difference.</p>
        
        <h2>What's Next</h2>
        <p>We're constantly improving Titus with new features and capabilities. Stay tuned for updates on our <em>image spam detection</em> feature, which is currently in alpha testing.</p>
      `,
      ru: `
        <h2>Проблема спама в Telegram</h2>
        <p>Группы в Telegram становятся всё более популярными для сообществ, но с ростом приходят и проблемы. Спам-сообщения, атакиботов и вредоносные пользователи могут быстро превратить процветающее сообщество в хаос.</p>
        
        <h2>Наше решение</h2>
        <p>Вот почему мы создали <strong>Titus</strong> - бота на основе AI, который работает 24/7, чтобы ваши группы в Telegram оставались чистыми и безопасными. Используя передовые технологии машинного обучения, Titus может:</p>
        
        <ul>
          <li>Обнаруживать спам-сообщения в реальном времени</li>
          <li>Проверять новых участников по базам известных спамеров</li>
          <li>Определять спам, скрытый в изображениях (альфа-функция)</li>
        </ul>
        
        <figure>
          <picture>
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800" alt="AI Technology" />
          </picture>
          <figcaption>Работает на передовых AI и машинном обучении</figcaption>
        </figure>
        
        <h2>Как это работает</h2>
        <p>Titus использует собственную ML-модель, обученную на миллионах спам-сообщений. Когда новое сообщение публикуется в вашей группе, Titus анализирует его за миллисекунды и принимает меры при необходимости.</p>
        
        <blockquote>
          "С тех пор как мы добавили Titus в наше сообщество, количество спама сократилось на 95%. Это как иметь преданного модератора, который никогда не спит." - Администратор сообщества
        </blockquote>
        
        <h3>Начало работы</h3>
        <p>Настройка Titus занимает меньше 5 минут. Просто добавьте бота в свою группу, предоставьте права администратора, и вы защищены. <a href="https://t.me/YourTitusBot">Попробуйте Titus сегодня</a> и почувствуйте разницу.</p>
        
        <h2>Что дальше</h2>
        <p>Мы постоянно улучшаем Titus новыми функциями и возможностями. Следите за обновлениями нашей функции <em>определения спама на изображениях</em>, которая сейчас находится в альфа-тестировании.</p>
      `,
    },
  },
  {
    id: "ai-spam-detection",
    title: {
      en: "How Our AI Spam Detection Works",
      ru: "Как работает наше AI-определение спама",
    },
    date: "2024-11-10",
    content: {
      en: `
        <h2>The Technology Behind Titus</h2>
        <p>At the heart of Titus lies a sophisticated machine learning model that has been trained on millions of spam and legitimate messages. Let's dive into how it works.</p>
        
        <h3>Data Collection</h3>
        <p>We've collected and analyzed over <strong>5 million messages</strong> from various Telegram communities. This diverse dataset helps our model understand different types of spam patterns across multiple languages and contexts.</p>
        
        <h3>Feature Extraction</h3>
        <p>Our system analyzes multiple features of each message:</p>
        <ul>
          <li>Message length and structure</li>
          <li>Presence of suspicious links</li>
          <li>Repetitive patterns</li>
          <li>User behavior history</li>
          <li>Time-based patterns</li>
        </ul>
        
        <figure>
          <picture>
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800" alt="Machine Learning" />
          </picture>
          <figcaption>Our ML model processes messages in real-time</figcaption>
        </figure>
        
        <h2>Real-Time Processing</h2>
        <p>Speed is crucial in spam detection. Our infrastructure can process messages in <em>under 100 milliseconds</em>, ensuring spam is caught before it spreads.</p>
        
        <blockquote>
          "The key to effective spam detection is not just accuracy, but speed. By the time a human moderator sees spam, it's already too late."
        </blockquote>
        
        <h3>Continuous Learning</h3>
        <p>Spammers are constantly evolving their tactics. That's why Titus continuously learns from new spam patterns and adapts its detection algorithms accordingly.</p>
        
        <h2>Accuracy Metrics</h2>
        <p>Our current model achieves:</p>
        <ul>
          <li><strong>98.5%</strong> spam detection rate</li>
          <li><strong>0.2%</strong> false positive rate</li>
          <li><strong><100ms</strong> average processing time</li>
        </ul>
        
        <p>These metrics are constantly monitored and improved as we gather more data and refine our algorithms.</p>
      `,
      ru: `
        <h2>Технология за Titus</h2>
        <p>В основе Titus лежит сложная модель машинного обучения, обученная на миллионах спам-сообщений и легитимных сообщений. Давайте разберемся, как это работает.</p>
        
        <h3>Сбор данных</h3>
        <p>Мы собрали и проанализировали более <strong>5 миллионов сообщений</strong> из различных сообществ Telegram. Этот разнообразный набор данных помогает нашей модели понимать различные типы спам-паттернов на нескольких языках и в разных контекстах.</p>
        
        <h3>Извлечение признаков</h3>
        <p>Наша система анализирует множество признаков каждого сообщения:</p>
        <ul>
          <li>Длина и структура сообщения</li>
          <li>Наличие подозрительных ссылок</li>
          <li>Повторяющиеся паттерны</li>
          <li>История поведения пользователя</li>
          <li>Временные паттерны</li>
        </ul>
        
        <figure>
          <picture>
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800" alt="Machine Learning" />
          </picture>
          <figcaption>Наша ML-модель обрабатывает сообщения в реальном времени</figcaption>
        </figure>
        
        <h2>Обработка в реальном времени</h2>
        <p>Скорость критична для обнаружения спама. Наша инфраструктура может обрабатывать сообщения <em>менее чем за 100 миллисекунд</em>, обеспечивая обнаружение спама до того, как он распространится.</p>
        
        <blockquote>
          "Ключ к эффективному обнаружению спама - это не только точность, но и скорость. К тому времени, когда модератор-человек увидит спам, уже слишком поздно."
        </blockquote>
        
        <h3>Непрерывное обучение</h3>
        <p>Спамеры постоянно меняют свою тактику. Поэтому Titus непрерывно учится на новых спам-паттернах и соответствующим образом адаптирует свои алгоритмы обнаружения.</p>
        
        <h2>Метрики точности</h2>
        <p>Наша текущая модель достигает:</p>
        <ul>
          <li><strong>98.5%</strong> точность обнаружения спама</li>
          <li><strong>0.2%</strong> ложных срабатываний</li>
          <li><strong><100мс</strong> среднее время обработки</li>
        </ul>
        
        <p>Эти метрики постоянно отслеживаются и улучшаются по мере сбора большего количества данных и совершенствования наших алгоритмов.</p>
      `,
    },
  },
];
