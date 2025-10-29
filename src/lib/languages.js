// Language configuration and transliteration maps

export const LANGUAGES = {
  hindi: {
    name: 'Hindi',
    nativeName: 'हिंदी',
    code: 'hi',
    font: 'Noto Sans Devanagari',
  },
  kannada: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    code: 'kn',
    font: 'Noto Sans Kannada',
  },
  gujarati: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    code: 'gu',
    font: 'Noto Sans Gujarati',
  },
};

// Hindi transliteration map
const hindiMap = {
  // Vowels
  'a': 'अ', 'aa': 'आ', 'aaa': 'आ', 'i': 'इ', 'ii': 'ई', 'ee': 'ई',
  'u': 'उ', 'uu': 'ऊ', 'oo': 'ऊ', 'ri': 'ऋ', 'e': 'ए', 'ai': 'ऐ',
  'ei': 'ऐ', 'o': 'ओ', 'au': 'औ', 'ou': 'औ', 'aw': 'औ',
  'am': 'अं', 'an': 'अं', 'ah': 'अः',

  // Common words (priority)
  'acha': 'अच्छा', 'achaa': 'अच्छा', 'achha': 'अच्छा',
  'ache': 'अच्छे', 'achchhe': 'अच्छे',
  'dhanyavaad': 'धन्यवाद', 'shukriya': 'शुक्रिया',
  'namaste': 'नमस्ते', 'swagat': 'स्वागत', 'bahut': 'बहुत',
  'hai': 'है',
  'tha': 'था', 'thi': 'थी', 'the': 'थे',
  'raha': 'रहा', 'rahe': 'रहे', 'rahi': 'रही',
  'kya': 'क्या', 'kyu': 'क्यों', 'kyun': 'क्यों',
  'main': 'मैं', 'mein': 'में', 'mujhe': 'मुझे', 'mera': 'मेरा', 'meri': 'मेरी',
  'tum': 'तुम', 'aap': 'आप', 'hum': 'हम', 'vo': 'वो', 'vah': 'वह',
  'ye': 'ये', 'yah': 'यह', 'wo': 'वो', 'woh': 'वो',
  'kaise': 'कैसे', 'kaun': 'कौन', 'kab': 'कब', 'kyon': 'क्यों', 'kyunki': 'क्योंकि',

  // Common consonant clusters
  'chch': 'च्छ', 'tth': 'त्त', 'ddh': 'द्ध', 'nn': 'न्न', 'shch': 'श्च',
  'gya': 'ग्या', 'nya': 'न्या', 'cha': 'चा', 'chya': 'च्या',
  'tya': 'त्या', 'dya': 'द्या', 'bya': 'ब्या', 'mya': 'म्या',
  'shya': 'श्या', 'hya': 'ह्या',
  'ss': 'स्स', 'll': 'ल्ल', 'rr': 'र्र',
  
  // Consonants with vowels
  'kaa': 'का', 'ka': 'का', 'ki': 'कि', 'kii': 'की', 'kee': 'की',
  'ku': 'कु', 'kuu': 'कू', 'koo': 'कू', 'ke': 'के', 'kai': 'कै',
  'ko': 'को', 'kau': 'कौ', 'kou': 'कौ', 'k': 'क',
  'khaa': 'खा', 'kha': 'खा', 'khi': 'खि', 'khii': 'खी', 'khee': 'खी',
  'khu': 'खु', 'khuu': 'खू', 'khoo': 'खू', 'khe': 'खे', 'khai': 'खै',
  'kho': 'खो', 'khau': 'खौ', 'kh': 'ख',
  'gaa': 'गा', 'ga': 'गा', 'gi': 'गि', 'gii': 'गी', 'gee': 'गी',
  'gu': 'गु', 'guu': 'गू', 'goo': 'गू', 'ge': 'गे', 'gai': 'गै',
  'go': 'गो', 'gau': 'गौ', 'g': 'ग',
  'ghaa': 'घा', 'gha': 'घा', 'ghi': 'घि', 'ghii': 'घी', 'ghee': 'घी',
  'ghu': 'घु', 'ghuu': 'घू', 'ghoo': 'घू', 'ghe': 'घे', 'ghai': 'घै',
  'gho': 'घो', 'ghau': 'घौ', 'gh': 'घ',
  'chaa': 'चा', 'cha': 'चा', 'chi': 'चि', 'chii': 'ची', 'chee': 'ची',
  'chu': 'चु', 'chuu': 'चू', 'choo': 'चू', 'che': 'चे', 'chai': 'चै',
  'cho': 'चो', 'chau': 'चौ', 'ch': 'च',
  'chhaa': 'छा', 'chha': 'छा', 'chhi': 'छि', 'chhii': 'छी', 'chhee': 'छी',
  'chhu': 'छु', 'chhuu': 'छू', 'chhoo': 'छू', 'chhe': 'छे', 'chhai': 'छै',
  'chho': 'छो', 'chhau': 'छौ', 'chh': 'छ',
  'jaa': 'जा', 'ja': 'जा', 'ji': 'जि', 'jii': 'जी', 'jee': 'जी',
  'ju': 'जु', 'juu': 'जू', 'joo': 'जू', 'je': 'जे', 'jai': 'जै',
  'jo': 'जो', 'jau': 'जौ', 'j': 'ज',
  'jhaa': 'झा', 'jha': 'झा', 'jhi': 'झि', 'jhii': 'झी', 'jhee': 'झी',
  'jhu': 'झु', 'jhuu': 'झू', 'jhoo': 'झू', 'jhe': 'झे', 'jhai': 'झै',
  'jho': 'झो', 'jhau': 'झौ', 'jh': 'झ',
  'taa': 'टा', 'ta': 'टा', 'ti': 'टि', 'tii': 'टी', 'tee': 'टी',
  'tu': 'टु', 'tuu': 'टू', 'too': 'टू', 'te': 'टे', 'tai': 'टै',
  'to': 'टो', 'tau': 'टौ', 't': 'ट',
  'thaa': 'ठा', 'tha': 'ठा', 'thi': 'ठि', 'thii': 'ठी', 'thee': 'ठी',
  'thu': 'ठु', 'thuu': 'ठू', 'thoo': 'ठू', 'the': 'ठे', 'thai': 'ठै',
  'tho': 'ठो', 'thau': 'ठौ', 'th': 'ठ',
  'daa': 'डा', 'da': 'डा', 'di': 'डि', 'dii': 'डी', 'dee': 'डी',
  'du': 'डु', 'duu': 'डू', 'doo': 'डू', 'de': 'डे', 'dai': 'डै',
  'do': 'डो', 'dau': 'डौ', 'd': 'ड',
  'dhaa': 'ढा', 'dha': 'ढा', 'dhi': 'ढि', 'dhii': 'ढी', 'dhee': 'ढी',
  'dhu': 'ढु', 'dhuu': 'ढू', 'dhoo': 'ढू', 'dhe': 'ढे', 'dhai': 'ढै',
  'dho': 'ढो', 'dhau': 'ढौ', 'dh': 'ढ',
  'naa': 'ना', 'na': 'ना', 'ni': 'नि', 'nii': 'नी', 'nee': 'नी',
  'nu': 'नु', 'nuu': 'नू', 'noo': 'नू', 'ne': 'ने', 'nai': 'नै',
  'no': 'नो', 'nau': 'नौ', 'n': 'न',
  'paa': 'पा', 'pa': 'पा', 'pi': 'पि', 'pii': 'पी', 'pee': 'पी',
  'pu': 'पु', 'puu': 'पू', 'poo': 'पू', 'pe': 'पे', 'pai': 'पै',
  'po': 'पो', 'pau': 'पौ', 'p': 'प',
  'phaa': 'फा', 'pha': 'फा', 'phi': 'फि', 'phii': 'फी', 'phee': 'फी',
  'phu': 'फु', 'phuu': 'फू', 'phoo': 'फू', 'phe': 'फे', 'phai': 'फै',
  'pho': 'फो', 'phau': 'फौ', 'ph': 'फ',
  'baa': 'बा', 'ba': 'बा', 'bi': 'बि', 'bii': 'बी', 'bee': 'बी',
  'bu': 'बु', 'buu': 'बू', 'boo': 'बू', 'be': 'बे', 'bai': 'बै',
  'bo': 'बो', 'bau': 'बौ', 'b': 'ब',
  'bhaa': 'भा', 'bha': 'भा', 'bhi': 'भि', 'bhii': 'भी', 'bhee': 'भी',
  'bhu': 'भु', 'bhuu': 'भू', 'bhoo': 'भू', 'bhe': 'भे', 'bhai': 'भै',
  'bho': 'भो', 'bhau': 'भौ', 'bh': 'भ',
  'maa': 'मा', 'ma': 'मा', 'mi': 'मि', 'mii': 'मी', 'mee': 'मी',
  'mu': 'मु', 'muu': 'मू', 'moo': 'मू', 'me': 'मे', 'mai': 'मै',
  'mo': 'मो', 'mau': 'मौ', 'm': 'म',
  'yaa': 'या', 'ya': 'या', 'yi': 'यि', 'yii': 'यी', 'yee': 'यी',
  'yu': 'यु', 'yuu': 'यू', 'yoo': 'यू', 'ye': 'ये', 'yai': 'यै',
  'yo': 'यो', 'yau': 'यौ', 'y': 'य',
  'raa': 'रा', 'ra': 'रा', 'ri': 'रि', 'rii': 'री', 'ree': 'री',
  'ru': 'रु', 'ruu': 'रू', 'roo': 'रू', 're': 'रे', 'rai': 'रै',
  'ro': 'रो', 'rau': 'रौ', 'r': 'र',
  'laa': 'ला', 'la': 'ला', 'li': 'लि', 'lii': 'ली', 'lee': 'ली',
  'lu': 'लु', 'luu': 'लू', 'loo': 'लू', 'le': 'ले', 'lai': 'लै',
  'lo': 'लो', 'lau': 'लौ', 'l': 'ल',
  'vaa': 'वा', 'va': 'वा', 'vi': 'वि', 'vii': 'वी', 'vee': 'वी',
  'vu': 'वु', 'vuu': 'वू', 'voo': 'वू', 've': 'वे', 'vai': 'वै',
  'vo': 'वो', 'vau': 'वौ', 'v': 'व',
  'waa': 'वा', 'wa': 'वा', 'wi': 'वि', 'wii': 'वी', 'wee': 'वी',
  'wu': 'वु', 'wuu': 'वू', 'woo': 'वू', 'we': 'वे', 'wai': 'वै',
  'wo': 'वो', 'wau': 'वौ', 'w': 'व',
  'shaa': 'शा', 'sha': 'शा', 'shi': 'शि', 'shii': 'शी', 'shee': 'शी',
  'shu': 'शु', 'shuu': 'शू', 'shoo': 'शू', 'she': 'शे', 'shai': 'शै',
  'sho': 'शो', 'shau': 'शौ', 'sh': 'श',
  'saa': 'सा', 'sa': 'सा', 'si': 'सि', 'sii': 'सी', 'see': 'सी',
  'su': 'सु', 'suu': 'सू', 'soo': 'सू', 'se': 'से', 'sai': 'सै',
  'so': 'सो', 'sau': 'सौ', 's': 'स',
  'haa': 'हा', 'ha': 'हा', 'hi': 'हि', 'hii': 'ही', 'hee': 'ही',
  'hu': 'हु', 'huu': 'हू', 'hoo': 'हू', 'he': 'हे', 'hai': 'है',
  'ho': 'हो', 'hau': 'हौ', 'h': 'ह',
  'kshaa': 'क्षा', 'ksha': 'क्षा', 'kshi': 'क्षि', 'kshee': 'क्षी',
  'kshu': 'क्षु', 'kshe': 'क्षे', 'ksho': 'क्षो', 'ksh': 'क्ष',
  'traa': 'त्रा', 'tra': 'त्रा', 'tri': 'त्रि', 'tree': 'त्री',
  'tru': 'त्रु', 'tre': 'त्रे', 'tro': 'त्रो', 'tr': 'त्र',
  'gyaa': 'ज्ञा', 'gya': 'ज्ञा', 'gyi': 'ज्ञि', 'gyee': 'ज्ञी',
  'gyu': 'ज्ञु', 'gye': 'ज्ञे', 'gyo': 'ज्ञो', 'gy': 'ज्ञ',
  'om': 'ॐ',
  '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
  '5': '५', '6': '६', '7': '७', '8': '८', '9': '९',
};

// Kannada transliteration map
const kannadaMap = {
  // Vowels
  'a': 'ಅ', 'aa': 'ಆ', 'i': 'ಇ', 'ii': 'ಈ', 'ee': 'ಈ',
  'u': 'ಉ', 'uu': 'ಊ', 'oo': 'ಊ', 'e': 'ಏ', 'ai': 'ಐ',
  'o': 'ಓ', 'au': 'ಔ', 'am': 'ಅಂ', 'ah': 'ಅಃ',
  
  // Consonants
  'kaa': 'ಕಾ', 'ka': 'ಕಾ', 'ki': 'ಕಿ', 'kii': 'ಕೀ', 'kee': 'ಕೀ',
  'ku': 'ಕು', 'kuu': 'ಕೂ', 'koo': 'ಕೂ', 'ke': 'ಕೇ', 'ko': 'ಕೋ', 'k': 'ಕ',
  'khaa': 'ಖಾ', 'kha': 'ಖಾ', 'khi': 'ಖಿ', 'khu': 'ಖು', 'khe': 'ಖೇ', 'kho': 'ಖೋ', 'kh': 'ಖ',
  'gaa': 'ಗಾ', 'ga': 'ಗಾ', 'gi': 'ಗಿ', 'gu': 'ಗು', 'ge': 'ಗೇ', 'go': 'ಗೋ', 'g': 'ಗ',
  'ghaa': 'ಘಾ', 'gha': 'ಘಾ', 'ghi': 'ಘಿ', 'ghu': 'ಘು', 'ghe': 'ಘೇ', 'gho': 'ಘೋ', 'gh': 'ಘ',
  'chaa': 'ಚಾ', 'cha': 'ಚಾ', 'chi': 'ಚಿ', 'chu': 'ಚು', 'che': 'ಚೇ', 'cho': 'ಚೋ', 'ch': 'ಚ',
  'jaa': 'ಜಾ', 'ja': 'ಜಾ', 'ji': 'ಜಿ', 'ju': 'ಜು', 'je': 'ಜೇ', 'jo': 'ಜೋ', 'j': 'ಜ',
  'jhaa': 'ಝಾ', 'jha': 'ಝಾ', 'jhi': 'ಝಿ', 'jhu': 'ಝು', 'jhe': 'ಝೇ', 'jho': 'ಝೋ', 'jh': 'ಝ',
  'taa': 'ಟಾ', 'ta': 'ಟಾ', 'ti': 'ಟಿ', 'tu': 'ಟು', 'te': 'ಟೇ', 'to': 'ಟೋ', 't': 'ಟ',
  'thaa': 'ಠಾ', 'tha': 'ಠಾ', 'thi': 'ಠಿ', 'thu': 'ಠು', 'the': 'ಠೇ', 'tho': 'ಠೋ', 'th': 'ಠ',
  'daa': 'ಡಾ', 'da': 'ಡಾ', 'di': 'ಡಿ', 'du': 'ಡು', 'de': 'ಡೇ', 'do': 'ಡೋ', 'd': 'ಡ',
  'dhaa': 'ಢಾ', 'dha': 'ಢಾ', 'dhi': 'ಢಿ', 'dhu': 'ಢು', 'dhe': 'ಢೇ', 'dho': 'ಢೋ', 'dh': 'ಢ',
  'naa': 'ನಾ', 'na': 'ನಾ', 'ni': 'ನಿ', 'nu': 'ನು', 'ne': 'ನೇ', 'no': 'ನೋ', 'n': 'ನ',
  'paa': 'ಪಾ', 'pa': 'ಪಾ', 'pi': 'ಪಿ', 'pu': 'ಪು', 'pe': 'ಪೇ', 'po': 'ಪೋ', 'p': 'ಪ',
  'phaa': 'ಫಾ', 'pha': 'ಫಾ', 'phi': 'ಫಿ', 'phu': 'ಫು', 'phe': 'ಫೇ', 'pho': 'ಫೋ', 'ph': 'ಫ',
  'baa': 'ಬಾ', 'ba': 'ಬಾ', 'bi': 'ಬಿ', 'bu': 'ಬು', 'be': 'ಬೇ', 'bo': 'ಬೋ', 'b': 'ಬ',
  'bhaa': 'ಭಾ', 'bha': 'ಭಾ', 'bhi': 'ಭಿ', 'bhu': 'ಭು', 'bhe': 'ಭೇ', 'bho': 'ಭೋ', 'bh': 'ಭ',
  'maa': 'ಮಾ', 'ma': 'ಮಾ', 'mi': 'ಮಿ', 'mu': 'ಮು', 'me': 'ಮೇ', 'mo': 'ಮೋ', 'm': 'ಮ',
  'yaa': 'ಯಾ', 'ya': 'ಯಾ', 'yi': 'ಯಿ', 'yu': 'ಯು', 'ye': 'ಯೇ', 'yo': 'ಯೋ', 'y': 'ಯ',
  'raa': 'ರಾ', 'ra': 'ರಾ', 'ri': 'ರಿ', 'ru': 'ರು', 're': 'ರೇ', 'ro': 'ರೋ', 'r': 'ರ',
  'laa': 'ಲಾ', 'la': 'ಲಾ', 'li': 'ಲಿ', 'lu': 'ಲು', 'le': 'ಲೇ', 'lo': 'ಲೋ', 'l': 'ಲ',
  'vaa': 'ವಾ', 'va': 'ವಾ', 'vi': 'ವಿ', 'vu': 'ವು', 've': 'ವೇ', 'vo': 'ವೋ', 'v': 'ವ',
  'shaa': 'ಶಾ', 'sha': 'ಶಾ', 'shi': 'ಶಿ', 'shu': 'ಶು', 'she': 'ಶೇ', 'sho': 'ಶೋ', 'sh': 'ಶ',
  'saa': 'ಸಾ', 'sa': 'ಸಾ', 'si': 'ಸಿ', 'su': 'ಸು', 'se': 'ಸೇ', 'so': 'ಸೋ', 's': 'ಸ',
  'haa': 'ಹಾ', 'ha': 'ಹಾ', 'hi': 'ಹಿ', 'hu': 'ಹು', 'he': 'ಹೇ', 'ho': 'ಹೋ', 'h': 'ಹ',
  '0': '೦', '1': '೧', '2': '೨', '3': '೩', '4': '೪',
  '5': '೫', '6': '೬', '7': '೭', '8': '೮', '9': '೯',
};

// Gujarati transliteration map
const gujaratiMap = {
  // Vowels
  'a': 'અ', 'aa': 'આ', 'i': 'ઇ', 'ii': 'ઈ', 'ee': 'ઈ',
  'u': 'ઉ', 'uu': 'ઊ', 'oo': 'ઊ', 'e': 'એ', 'ai': 'ઐ',
  'o': 'ઓ', 'au': 'ઔ', 'am': 'અં', 'ah': 'અઃ',
  
  // Consonants
  'kaa': 'કા', 'ka': 'કા', 'ki': 'કિ', 'kii': 'કી', 'kee': 'કી',
  'ku': 'કુ', 'kuu': 'કૂ', 'koo': 'કૂ', 'ke': 'કે', 'ko': 'કો', 'k': 'ક',
  'khaa': 'ખા', 'kha': 'ખા', 'khi': 'ખિ', 'khu': 'ખુ', 'khe': 'ખે', 'kho': 'ખો', 'kh': 'ખ',
  'gaa': 'ગા', 'ga': 'ગા', 'gi': 'ગિ', 'gu': 'ગુ', 'ge': 'ગે', 'go': 'ગો', 'g': 'ગ',
  'ghaa': 'ઘા', 'gha': 'ઘા', 'ghi': 'ઘિ', 'ghu': 'ઘુ', 'ghe': 'ઘે', 'gho': 'ઘો', 'gh': 'ઘ',
  'chaa': 'ચા', 'cha': 'ચા', 'chi': 'ચિ', 'chu': 'ચુ', 'che': 'ચે', 'cho': 'ચો', 'ch': 'ચ',
  'jaa': 'જા', 'ja': 'જા', 'ji': 'જિ', 'ju': 'જુ', 'je': 'જે', 'jo': 'જો', 'j': 'જ',
  'jhaa': 'ઝા', 'jha': 'ઝા', 'jhi': 'ઝિ', 'jhu': 'ઝુ', 'jhe': 'ઝે', 'jho': 'ઝો', 'jh': 'ઝ',
  'taa': 'ટા', 'ta': 'ટા', 'ti': 'ટિ', 'tu': 'ટુ', 'te': 'ટે', 'to': 'ટો', 't': 'ટ',
  'thaa': 'ઠા', 'tha': 'ઠા', 'thi': 'ઠિ', 'thu': 'ઠુ', 'the': 'ઠે', 'tho': 'ઠો', 'th': 'ઠ',
  'daa': 'ડા', 'da': 'ડા', 'di': 'ડિ', 'du': 'ડુ', 'de': 'ડે', 'do': 'ડો', 'd': 'ડ',
  'dhaa': 'ઢા', 'dha': 'ઢા', 'dhi': 'ઢિ', 'dhu': 'ઢુ', 'dhe': 'ઢે', 'dho': 'ઢો', 'dh': 'ઢ',
  'naa': 'ના', 'na': 'ના', 'ni': 'નિ', 'nu': 'નુ', 'ne': 'ને', 'no': 'નો', 'n': 'ન',
  'paa': 'પા', 'pa': 'પા', 'pi': 'પિ', 'pu': 'પુ', 'pe': 'પે', 'po': 'પો', 'p': 'પ',
  'phaa': 'ફા', 'pha': 'ફા', 'phi': 'ફિ', 'phu': 'ફુ', 'phe': 'ફે', 'pho': 'ફો', 'ph': 'ફ',
  'baa': 'બા', 'ba': 'બા', 'bi': 'બિ', 'bu': 'બુ', 'be': 'બે', 'bo': 'બો', 'b': 'બ',
  'bhaa': 'ભા', 'bha': 'ભા', 'bhi': 'ભિ', 'bhu': 'ભુ', 'bhe': 'ભે', 'bho': 'ભો', 'bh': 'ભ',
  'maa': 'મા', 'ma': 'મા', 'mi': 'મિ', 'mu': 'મુ', 'me': 'મે', 'mo': 'મો', 'm': 'મ',
  'yaa': 'યા', 'ya': 'યા', 'yi': 'યિ', 'yu': 'યુ', 'ye': 'યે', 'yo': 'યો', 'y': 'ય',
  'raa': 'રા', 'ra': 'રા', 'ri': 'રિ', 'ru': 'રુ', 're': 'રે', 'ro': 'રો', 'r': 'ર',
  'laa': 'લા', 'la': 'લા', 'li': 'લિ', 'lu': 'લુ', 'le': 'લે', 'lo': 'લો', 'l': 'લ',
  'vaa': 'વા', 'va': 'વા', 'vi': 'વિ', 'vu': 'વુ', 've': 'વે', 'vo': 'વો', 'v': 'વ',
  'shaa': 'શા', 'sha': 'શા', 'shi': 'શિ', 'shu': 'શુ', 'she': 'શે', 'sho': 'શો', 'sh': 'શ',
  'saa': 'સા', 'sa': 'સા', 'si': 'સિ', 'su': 'સુ', 'se': 'સે', 'so': 'સો', 's': 'સ',
  'haa': 'હા', 'ha': 'હા', 'hi': 'હિ', 'hu': 'હુ', 'he': 'હે', 'ho': 'હો', 'h': 'હ',
  '0': '૦', '1': '૧', '2': '૨', '3': '૩', '4': '૪',
  '5': '૫', '6': '૬', '7': '૭', '8': '૮', '9': '૯',
};

const transliterationMaps = {
  hindi: hindiMap,
  kannada: kannadaMap,
  gujarati: gujaratiMap,
};

export function transliterate(text, language = 'hindi') {
  if (!text) return '';
  
  const map = transliterationMaps[language] || hindiMap;
  let result = '';
  let input = text.toLowerCase();
  let i = 0;
  
  while (i < input.length) {
    // Check for space or punctuation
    if (input[i] === ' ' || input[i] === ',' || input[i] === '.' || 
        input[i] === '!' || input[i] === '?' || input[i] === ';' || 
        input[i] === ':' || input[i] === '-' || input[i] === '(' || 
        input[i] === ')') {
      result += input[i];
      i++;
      continue;
    }
    
    // Try to match longest possible substring first (up to 5 characters)
    let matched = false;
    for (let len = 5; len >= 1; len--) {
      const substr = input.substr(i, len);
      if (map[substr]) {
        result += map[substr];
        i += len;
        matched = true;
        break;
      }
    }
    
    // If no match found, keep the original character
    if (!matched) {
      result += input[i];
      i++;
    }
  }
  
  return result;
}