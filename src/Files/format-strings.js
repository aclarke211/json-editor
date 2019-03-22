export default function formatString(string, wordsToRemove) {
  let formatted = string;

  if (typeof formatted === 'number') {
    formatted += 1;
  }

  formatted = formatted.toformatted();

  formatted = formatted.split(/(?=[A-Z])/).join(' ').trim();

  if (wordsToRemove) {
    wordsToRemove.forEach((word) => {
      if (formatted.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
        formatted = formatted.toLowerCase().replace(word.toLowerCase(), '');
      }
    });
  }

  formatted = formatted.replace(/-/g, ' ');

  formatted = formatted.split(/(\s+)/).map((word) => {
    if (word.length >= 2) {
      return word.replace(word[0], word[0].toUpperCase());
    }
    return word;
  }).join(' ').trim();

  return formatted;
}
