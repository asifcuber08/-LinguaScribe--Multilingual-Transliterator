'use client';

export default function LanguageKeyboard({ language, onKeyPress, onBackspace, onSpace }) {
  const keyboards = {
    hindi: {
      name: 'Hindi',
      keys: [
        // Row 1 - Vowels
        ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'],
        // Row 2 - Consonants (Ka to Cha)
        ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ'],
        // Row 3 - Consonants (Ta to Tha)
        ['ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न'],
        // Row 4 - Consonants (Pa to Ha)
        ['प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व'],
        // Row 5 - Consonants (Sha to Ksha) and Matras
        ['श', 'ष', 'स', 'ह', 'क्ष', 'त्र', 'ज्ञ', '्', 'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', 'ं', 'ः'],
        // Row 6 - Numbers and special
        ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९', 'ॐ', '।', '॥'],
      ],
      font: 'Noto Sans Devanagari',
    },
    kannada: {
      name: 'Kannada',
      keys: [
        // Row 1 - Vowels
        ['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ಏ', 'ಐ', 'ಓ', 'ಔ', 'ಅಂ', 'ಅಃ'],
        // Row 2 - Consonants
        ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ'],
        // Row 3 - Consonants
        ['ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ', 'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ'],
        // Row 4 - Consonants
        ['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ', 'ಯ', 'ರ', 'ಲ', 'ವ'],
        // Row 5 - More consonants and Matras
        ['ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ', '್', 'ಾ', 'ಿ', 'ೀ', 'ು', 'ೂ', 'ೇ', 'ೈ', 'ೊ', 'ೋ', 'ಂ', 'ಃ'],
        // Row 6 - Numbers
        ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'],
      ],
      font: 'Noto Sans Kannada',
    },
    gujarati: {
      name: 'Gujarati',
      keys: [
        // Row 1 - Vowels
        ['અ', 'આ', 'ઇ', 'ઈ', 'ઉ', 'ઊ', 'ઋ', 'એ', 'ઐ', 'ઓ', 'ઔ', 'અં', 'અઃ'],
        // Row 2 - Consonants
        ['ક', 'ખ', 'ગ', 'ઘ', 'ઙ', 'ચ', 'છ', 'જ', 'ઝ', 'ઞ'],
        // Row 3 - Consonants
        ['ટ', 'ઠ', 'ડ', 'ઢ', 'ણ', 'ત', 'થ', 'દ', 'ધ', 'ન'],
        // Row 4 - Consonants
        ['પ', 'ફ', 'બ', 'ભ', 'મ', 'ય', 'ર', 'લ', 'વ'],
        // Row 5 - More consonants and Matras
        ['શ', 'ષ', 'સ', 'હ', 'ળ', '્', 'ા', 'િ', 'ી', 'ુ', 'ૂ', 'ે', 'ૈ', 'ો', 'ૌ', 'ં', 'ઃ'],
        // Row 6 - Numbers
        ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'],
      ],
      font: 'Noto Sans Gujarati',
    },
  };

  const currentKeyboard = keyboards[language] || keyboards.hindi;

  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-4">
      <div className="mb-3 flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-700">
          {currentKeyboard.name} Keyboard
        </h3>
        <div className="flex gap-2">
          <button
            onClick={onSpace}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-6 py-2 rounded transition duration-150"
          >
            Space
          </button>
          <button
            onClick={onBackspace}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition duration-150"
          >
            ⌫ Delete
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        {currentKeyboard.keys.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-1 justify-center">
            {row.map((key, keyIndex) => (
              <button
                key={keyIndex}
                onClick={() => onKeyPress(key)}
                className="bg-white hover:bg-indigo-100 border border-gray-300 text-gray-800 font-semibold px-3 py-2 rounded shadow-sm transition duration-150 hover:scale-105"
                style={{ 
                  fontFamily: `${currentKeyboard.font}, sans-serif`,
                  minWidth: key.length > 1 ? '45px' : '38px',
                  fontSize: '16px'
                }}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-3 text-xs text-gray-600 text-center">
        Click on characters to type in {currentKeyboard.name} • Note: ् (Halant) creates half letters
      </div>
    </div>
  );
}