import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Wir befolgen strenge Richtlinien gegen die Verbreitung der auf unserer Plattform gesammelten Informationen und verlangen von den Benutzern den Erwerb entsprechender Lizenzen, wenn sie Teile des Inhalts unserer Website nutzen möchten. Unser Engagement erstreckt sich auf den Schutz Ihrer persönlichen Daten und gewährleistet ein sicheres und vertrauenswürdiges Surferlebnis.</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>This privacy policy clarifies that the website doesn't collect any personal information from visitors. It emphasizes the protection of website content through copyright and outlines the requirement for obtaining permission before using any part of the content. The policy assures secure browsing and highlights the option to contact the owner for any inquiries.</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
