var HANGUL_SYLLABLES_START = 44032,
  HANGUL_SYLLABLES_END = 55203;


initialJamo = new Object();

initialJamo.r = 0, // ㄱ
initialJamo.R = 1, // ㄲ
initialJamo.S = initialJamo.s = 2, // ㄴ
initialJamo.e = 3, // ㄷ
initialJamo.E = 4, // ㄸ
initialJamo.F = initialJamo.f = 5, // ㄹ
initialJamo.A = initialJamo.a = 6, // ㅁ
initialJamo.q = 7, // ㅂ
initialJamo.Q = 8, // ㅃ
initialJamo.t = 9, // ㅅ
initialJamo.T = 10, // ㅆ
initialJamo.D = initialJamo.d = 11, // ㅇ
initialJamo.w = 12, // ㅈ
initialJamo.W = 13, // ㅉ
initialJamo.C = initialJamo.c = 14, // ㅊ
initialJamo.Z = initialJamo.z = 15, // ㅋ
initialJamo.X = initialJamo.x = 16, // ㅌ
initialJamo.V = initialJamo.v = 17, // ㅍ
initialJamo.G = initialJamo.g = 18; // ㅎ
// the letters unused are the vowels yuiophjklbnm = ㅛㅕㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡ

medialJamo = new Object();

medialJamo.K = medialJamo.k = 0, // ㅏ
medialJamo.o = 1, // ㅐ
medialJamo.I = medialJamo.i = 2, // ㅑ
medialJamo.O = 3, // ㅒ
medialJamo.J = medialJamo.j = 4, // ㅓ 
medialJamo.p = 5, // ㅔ
medialJamo.U = medialJamo.u = 6, // ㅕ
medialJamo.P = 7, // ㅖ
medialJamo.H = medialJamo.h = 8, // ㅗ
medialJamo.hK = medialJamo.Hk = medialJamo.HK = medialJamo.hk = 9, // ㅘ
medialJamo.Ho = medialJamo.ho = 10, // ㅙ
medialJamo.hL = medialJamo.Hl = medialJamo.HL = medialJamo.hl = 11, // ㅚ 
medialJamo.Y = medialJamo.y = 12, // ㅛ 
medialJamo.N = medialJamo.n = 13, //ㅠㅜ 
medialJamo.nJ = medialJamo.Nj = medialJamo.NJ = medialJamo.nj = 14, // ㅝ
medialJamo.Np = medialJamo.np = 15, // ㅞ
medialJamo.nL = medialJamo.Nl = medialJamo.NL = medialJamo.nl = 16, // ㅟ
medialJamo.B = medialJamo.b = 17, // ㅠ
medialJamo.M = medialJamo.m = 18, // ㅡ
medialJamo.mL = medialJamo.Ml = medialJamo.ML = medialJamo.ml = 19, // ㅢ
medialJamo.L = medialJamo.l = 20; // ㅣ

finalJamo = new Object();
// none = 0
finalJamo.r = 1, // ㄱ
finalJamo.R = 2, // ㄲ
finalJamo.rt = 3, // ㄳ 
finalJamo.S = finalJamo.s = 4, // ㄴ
finalJamo.Sw = finalJamo.sw = 5, // ㄵ
finalJamo.sG = finalJamo.Sg = finalJamo.SG = finalJamo.sg = 6, // ㄶ 
finalJamo.e = 7, // ㄷ
finalJamo.F = finalJamo.f = 8, // ㄹ
finalJamo.Fr = finalJamo.fr = 9, // ㄺ 
finalJamo.fA = finalJamo.Fa = finalJamo.FA = finalJamo.fa = 10, // ㄻ 
finalJamo.Fq = finalJamo.fq = 11, // ㄼ 
finalJamo.Ft = finalJamo.ft = 12, // ㄽ 
finalJamo.fX = finalJamo.Fx = finalJamo.FX = finalJamo.fx = 13, // ㄾ 
finalJamo.fV = finalJamo.Fv = finalJamo.FV = finalJamo.fv = 14, // ㄿ
finalJamo.fG = finalJamo.Fg = finalJamo.FG = finalJamo.fg = 15, // ㅀ
finalJamo.A = finalJamo.a = 16, // ㅁ
finalJamo.q = 17, // ㅂ
finalJamo.qt = 18, // ㅄ
finalJamo.t = 19, // ㅅ
finalJamo.T = 20, // ㅆ
finalJamo.D = finalJamo.d = 21, // ㅇ 
finalJamo.w = 22, // ㅈ
finalJamo.C = finalJamo.c = 23, // ㅊ
finalJamo.Z = finalJamo.z = 24, // ㅋ
finalJamo.X = finalJamo.x = 25, // ㅌ 
finalJamo.V = finalJamo.v = 26, // ㅍ
finalJamo.G = finalJamo.g = 27; // ㅎ

linearFullCode = new Object();

linearFullCode.q = 12610, // ㅂ
linearFullCode.Q = 12611, // ㅃ
linearFullCode.w = 12616, // ㅈ
linearFullCode.W = 12617, // ㅉ
linearFullCode.e = 12599, // ㄷ
linearFullCode.E = 12600, // ㄸ
linearFullCode.r = 12593, // ㄱ
linearFullCode.R = 12594, // ㄲ
linearFullCode.t = 12613, // ㅅ
linearFullCode.T = 12614, // ㅆ
linearFullCode.Y = linearFullCode.y = 12635, // ㅛ
linearFullCode.U = linearFullCode.u = 12629, // ㅕ
linearFullCode.I = linearFullCode.i = 12625, // ㅑ
linearFullCode.o = 12624, // ㅐ
linearFullCode.O = 12626, // ㅒ
linearFullCode.p = 12628, // ㅔ
linearFullCode.P = 12630, // ㅖ
linearFullCode.A = linearFullCode.a = 12609, // ㅁ
linearFullCode.S = linearFullCode.s = 12596, // ㄴ
linearFullCode.D = linearFullCode.d = 12615, // ㅇ
linearFullCode.F = linearFullCode.f = 12601, // ㄹ
linearFullCode.G = linearFullCode.g = 12622, // ㅎ
linearFullCode.H = linearFullCode.h = 12631, // ㅗ
linearFullCode.hK = linearFullCode.Hk 
= linearFullCode.HK = linearFullCode.hk = 12632, // ㅘ
linearFullCode.Ho = linearFullCode.ho = 12633, // ㅙ
linearFullCode.hL = linearFullCode.Hl 
= linearFullCode.HL = linearFullCode.hl = 12634, // ㅚ 
linearFullCode.J = linearFullCode.j = 12627, // ㅓ
linearFullCode.K = linearFullCode.k = 12623, // ㅏ
linearFullCode.L = linearFullCode.l = 12643, // ㅣ
linearFullCode.Z = linearFullCode.z = 12619, // ㅋ
linearFullCode.X = linearFullCode.x = 12620, // ㅌ
linearFullCode.C = linearFullCode.c = 12618, // ㅊ
linearFullCode.V = linearFullCode.v = 12621, // ㅍ
linearFullCode.B = linearFullCode.b = 12640, // ㅠ
linearFullCode.N = linearFullCode.n = 12636, //ㅠㅜ
linearFullCode.nJ = linearFullCode.Nj 
= linearFullCode.NJ = linearFullCode.nj = 12637, // ㅝ
linearFullCode.Np = linearFullCode.np = 12638, // ㅞ
linearFullCode.nL = linearFullCode.Nl 
= linearFullCode.NL = linearFullCode.nl = 12639, // ㅟ
linearFullCode.M = linearFullCode.m = 12641, // ㅡ
linearFullCode.mL = linearFullCode.Ml 
= linearFullCode.ML = linearFullCode.ml = 12642; // ㅢ
linearFullCode.rt = 12595


// The precomposed hangul syllables in the Hangul Syllables block 
// in Unicode are algorithmically defined, using the following formula:
// [(initial) × 588 + (medial) × 28 + (final)] + 44032

function convertToHangul(input) {
  var hangulBox = document.getElementById('han');
  hangulBox.value = blockBuilder(input);
}

function blockBuilder(text) {
  var blocks = '';
  var i = 0;
  var initialJamoValue = -1;
  var medialJamoValue = -1;
  var finalJamoValue = -1;
  var codeNum = 0;
  while (i < text.length) {
    // First character is a vowel
    if (text.substring(i, i+1) in medialJamo) {
      // If it's a compound vowel part
      if (text.substring(i, i+2) in medialJamo) {
        blocks += String.fromCharCode(linearFullCode[text.substring(i, i+2)]);
        i += 2;
      } else {
        blocks += String.fromCharCode(linearFullCode[text.substring(i, i+1)]);
        i += 1;
      }
    // First character is a consonant
    } else if (text.substring(i, i+1) in initialJamo) {
        // Second character is a vowel
        if (text.substring(i+1, i+2) in medialJamo) {
          initialJamoValue = initialJamo[text.substring(i, i+1)];
          if (text.substring(i+1, i+3) in medialJamo) {
            medialJamoValue = medialJamo[text.substring(i+1, i+3)];
            i += 3;
          } else {
            medialJamoValue = medialJamo[text.substring(i+1, i+2)];
            i += 2;
          }
          // Third character is a final consonant part
          if (text.substring(i, i+1) in finalJamo) {
            // Compound final part and no vowel after
            if (text.substring(i, i+2) in finalJamo && 
            !(text.substring(i+2, i+3) in medialJamo)) {
              finalJamoValue = finalJamo[text.substring(i, i+2)];
              i += 2;
            } else if (text.substring(i, i+1) in initialJamo &&
            text.substring(i+1, i+2) in medialJamo) {
              finalJamoValue = 0;
            } else {
              finalJamoValue = finalJamo[text.substring(i, i+1)];
              i += 1;
            }
          } else { finalJamoValue = 0; }
          // No finalJamo, so the block is complete and is created, and any
          // characters after the first two are going to create another block
          codeNum = ((initialJamoValue * 588)
          + (medialJamoValue * 28) + finalJamoValue) + 44032;
          blocks += String.fromCharCode(codeNum);
        // Second character is not a vowel
        } else {
          blocks += String.fromCharCode(linearFullCode[text.substring(i, i+1)]);
          i += 1;
          // Then the next block is built from the characters after
        }
    } else {
      blocks += text.substring(i, i+1);
      i += 1;
    }
  }
  return blocks;
}

function findKey(obj, val) {
  var arr = Object.keys(obj);
  for (i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === val) {
      return arr[i];
    }
  }
}

function convertToAlpha(input) {
  var alphaBox = document.getElementById('eng');
  alphaBox.value = blockBreaker(input);
}

function blockBreaker(text) {
  var str = '';
  var i = 0;
  var initialJamoValue = -1;
  var medialJamoValue = -1;
  var finalJamoValue = -1;
  var codeNum = 0;
  while (i < text.length) {
    codeNum = text.charCodeAt(i);
    if (12593 <= codeNum && codeNum <= 12643) {
      str += findKey(linearFullCode, codeNum); // need to make double qwert double letter (option?)
      i += 1;
    } else if (44032 <= codeNum && codeNum <= 55203) {
      initialJamoValue = Math.floor((codeNum - 44032) / 588);
      var ans = 0;
      for (j = 0, filled = false; j < 28 && !filled; j++) {
        ans = ((codeNum - 44032 - j) - (initialJamoValue * 588)) / 28;
        if (Number.isInteger(ans)) {
          medialJamoValue = ans;
          finalJamoValue = j;
          filled = true;
        }
      } 
      str += findKey(initialJamo, initialJamoValue);
      str += findKey(medialJamo, medialJamoValue);
      if (finalJamoValue != 0) {
        str += findKey(finalJamo, finalJamoValue);
      }
      i += 1;
    } else {
      str += text.substring(i, i+1);
      i += 1;
    }
  }
  return str;
}
// Currently all characters are output as undefined INCL. strings
// passed directly. except linear 