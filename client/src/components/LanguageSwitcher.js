import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('english');

  const descriptions = {
    english: "I'm learning to create websites to become a front-end developer. My goal is to earn remotely, work from home, and move to the place where I dream of living.",
    arabic: "أتعلم إنشاء مواقع الويب لأصبح مطور واجهات أمامية. هدفي هو كسب المال عن بُعد والعمل من المنزل والانتقال إلى المكان الذي أحلم بالعيش فيه.",
    french: "J'apprends à créer des sites web pour devenir développeur front-end. Mon objectif est de gagner ma vie à distance, de travailler de chez moi et de déménager là où je rêve de vivre.",
    italian: "Sto imparando a creare siti web per diventare uno sviluppatore front-end. Il mio obiettivo è guadagnare da remoto, lavorare da casa e trasferirmi nel luogo in cui sogno di vivere.",
    spanish: "Estoy aprendiendo a crear sitios web para convertirme en desarrollador front-end. Mi objetivo es ganar dinero de forma remota, trabajar desde casa y mudarme al lugar donde sueño vivir.",
    mandarin: "我正在学习创建网站，以成为一名前端开发者。我的目标是远程赚钱，在家工作，并搬到我梦想居住的地方。",
    hebrew: "אני לומד ליצור אתרים כדי להפוך למפתח פרונט-אנד. המטרה שלי היא להרוויח מרחוק, לעבוד מהבית ולעבור למקום שבו אני חולם לגור.",
    czech: "Učím se vytvářet webové stránky, abych se stal front-end vývojářem. Mým cílem je vydělávat na dálku, pracovat z domova a přestěhovat se tam, kde sním žít.",
    polish: "Uczę się tworzyć strony internetowe, aby zostać front-end deweloperem. Moim celem jest zarabianie zdalnie, praca z domu i przeprowadzka tam, gdzie marzę mieszkać.",
    german: "Ich lerne, Websites zu erstellen, um Frontend-Entwickler zu werden. Mein Ziel ist es, remote zu arbeiten, von zu Hause aus zu verdienen und an den Ort zu ziehen, von dem ich träume.",
    turkish: "Web siteleri oluşturmayı öğreniyorum ve ön uç geliştiricisi olmak istiyorum. Amacım uzaktan para kazanmak, evden çalışmak ve hayalini kurduğum yere taşınmak.",
    japanese: "ウェブサイトの作り方を学び、フロントエンド開発者になりたいです。私の目標はリモートで収入を得て、家で仕事をし、夢見ている場所に引っ越すことです。"
  };

  // Цвета для каждого языка
  const languageColors = {
    english: "text-red-500",
    arabic: "text-green-500",
    french: "text-blue-500",
    italian: "text-green-500",
    spanish: "text-orange-500",
    mandarin: "text-red-500",
    hebrew: "text-blue-500",
    czech: "text-white",
    polish: "text-white",
    german: "text-orange-500",
    turkish: "text-red-500",
    japanese: "text-black-500"
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <button onClick={() => setLanguage('english')} className="p-2 mr-2 bg-red-500 text-white rounded">English</button>
        <button onClick={() => setLanguage('arabic')} className="p-2 mr-2 bg-green-500 text-yellow-600 rounded-full">Arabic</button>
        <button onClick={() => setLanguage('french')} className="p-2 mr-2 bg-blue-500 text-white rounded">French</button>
        <button onClick={() => setLanguage('italian')} className="p-2 mr-2 bg-green-500 text-red-500 rounded-full">Italian</button>
        <button onClick={() => setLanguage('spanish')} className="p-2 mr-2 bg-yellow-500 text-white rounded">Spanish</button>
        <button onClick={() => setLanguage('mandarin')} className="p-2 mr-2 bg-red-500 text-black rounded-full">China</button>
        <button onClick={() => setLanguage('hebrew')} className="p-2 mr-2 bg-blue-500 text-white rounded">Hebrew</button>
        <button onClick={() => setLanguage('czech')} className="p-2 mr-2 bg-white text-blue-500 rounded-full">Czech</button>
        <button onClick={() => setLanguage('polish')} className="p-2 mr-2 bg-white text-red-500 rounded">Polish</button>
        <button onClick={() => setLanguage('german')} className="p-2 mr-2 bg-orange-500 text-black rounded-full">German</button>
        <button onClick={() => setLanguage('turkish')} className="p-2 mr-2 bg-red-500 text-white rounded">Turkish</button>
        <button onClick={() => setLanguage('japanese')} className="p-2 mr-2 bg-white text-black rounded-full">Japan</button>
      </div>

      <h2 className={`text-xl ${languageColors[language]}`}>
        {descriptions[language]}
      </h2>
    </div>
  );
};

export default LanguageSwitcher;
