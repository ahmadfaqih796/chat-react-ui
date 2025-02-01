export const formatAIResponse = (text) => {
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/__(.*?)__/g, "<i>$1</i>")
    .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n- (.*?)/g, "<li>$1</li>")
    .replace(/\n\d+\.\s(.*?)/g, "<li>$1</li>");

  formattedText = formattedText.replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>");

  formattedText = formattedText.replace(/\n\n/g, "</p><p>");
  formattedText = `<p>${formattedText}</p>`;

  return formattedText;
};
