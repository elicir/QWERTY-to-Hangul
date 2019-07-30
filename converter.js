var HANGUL_SYLLABLES_START = 44032,
  HANGUL_SYLLABLES_END = 55203;


initialJamo = new Object();

initialJamo.r = 0, // ㄱ
initialJamo.R = 1, // ㄲ
initialJamo.s = initialJamo.S = 2, // ㄴ
initialJamo.e = 3, // ㄷ
initialJamo.E = 4, // ㄸ
initialJamo.f = initialJamo.F = 5, // ㄹ
initialJamo.a = initialJamo.A = 6, // ㅁ
initialJamo.q = 7, // ㅂ
initialJamo.Q = 8, // ㅃ
initialJamo.t = 9, // ㅅ
initialJamo.T = 10, // ㅆ
initialJamo.d = initialJamo.D = 11, // ㅇ
initialJamo.w = 12, // ㅈ
initialJamo.W = 13, // ㅉ
initialJamo.c = initialJamo.C = 14, // ㅊ
initialJamo.z = initialJamo.Z = 15, // ㅋ
initialJamo.x = initialJamo.X = 16, // ㅌ
initialJamo.v = initialJamo.V = 17, // ㅍ
initialJamo.g = initialJamo.G = 18; // ㅎ
// the letters unused are the vowels yuiophjklbnm = ㅛㅕㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡ

medialJamo = new Object();

medialJamo.k = medialJamo.K = 0, // ㅏ
medialJamo.o = 1, // ㅐ
medialJamo.i = medialJamo.I = 2, // ㅑ
medialJamo.O = 3, // ㅒ
medialJamo.j = medialJamo.J = 4, // ㅓ 
medialJamo.p = 5, // ㅔ
medialJamo.u = medialJamo.U = 6, // ㅕ
medialJamo.P = 7, // ㅖ
medialJamo.h = medialJamo.H = 8, // ㅗ
medialJamo.hk = medialJamo.Hk = medialJamo.HK = medialJamo.hK = 9, // ㅘ
medialJamo.ho = medialJamo.Ho = 10, // ㅙ
medialJamo.hl = medialJamo.Hl = medialJamo.HL = medialJamo.hL = 11, // ㅚ 
medialJamo.y = medialJamo.Y = 12, // ㅛ 
medialJamo.n = medialJamo.N = 13, //ㅠㅜ 
medialJamo.nj = medialJamo.Nj = medialJamo.NJ = medialJamo.nJ = 14, // ㅝ
medialJamo.np = medialJamo.Np = 15, // ㅞ
medialJamo.nl = medialJamo.Nl = medialJamo.NL = medialJamo.nL = 16, // ㅟ
medialJamo.b = medialJamo.B = 17, // ㅠ
medialJamo.m = medialJamo.M = 18, // ㅡ
medialJamo.ml = medialJamo.Ml = medialJamo.ML = medialJamo.ML = 19, // ㅢ
medialJamo.l = medialJamo.L = 20; // ㅣ

finalJamo = new Object();
// none = 0
finalJamo.r = 1, // ㄱ
finalJamo.R = 2, // ㄲ
finalJamo.rt = 3, // ㄳ 
finalJamo.s = finalJamo.S = 4, // ㄴ
finalJamo.sw = finalJamo.Sw = 5, // ㄵ
finalJamo.sg = finalJamo.Sg = finalJamo.SG = finalJamo.sG = 6, // ㄶ 
finalJamo.e = 7, // ㄷ
finalJamo.f = finalJamo.F = 8, // ㄹ
finalJamo.fr = finalJamo.Fr = 9, // ㄺ 
finalJamo.fa = finalJamo.Fa = finalJamo.FA = finalJamo.fA = 10, // ㄻ 
finalJamo.fq = finalJamo.Fq = 11, // ㄼ 
finalJamo.ft = finalJamo.Ft = 12, // ㄽ 
finalJamo.fx = finalJamo.Fx = finalJamo.FX = finalJamo.fX = 13, // ㄾ 
finalJamo.fv = finalJamo.Fv = finalJamo.FV = finalJamo.fV = 14, // ㄿ
finalJamo.fg = finalJamo.Fg = finalJamo.FG = finalJamo.fG = 15, // ㅀ
finalJamo.a = finalJamo.A = 16, // ㅁ
finalJamo.q = 17, // ㅂ
finalJamo.qt = 18, // ㅄ
finalJamo.t = 19, // ㅅ
finalJamo.T = 20, // ㅆ
finalJamo.d = finalJamo.D = 21, // ㅇ 
finalJamo.w = 22, // ㅈ
finalJamo.c = finalJamo.C = 23, // ㅊ
finalJamo.z = finalJamo.Z = 24, // ㅋ
finalJamo.x = finalJamo.X = 25, // ㅌ 
finalJamo.v = finalJamo.V = 26, // ㅍ
finalJamo.g = finalJamo.G = 27; // ㅎ

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
linearFullCode.y = linearFullCode.Y = 12635, // ㅛ
linearFullCode.u = linearFullCode.U = 12629, // ㅕ
linearFullCode.i = linearFullCode.I = 12625, // ㅑ
linearFullCode.o = 12624, // ㅐ
linearFullCode.O = 12626, // ㅒ
linearFullCode.p = 12628, // ㅔ
linearFullCode.P = 12630, // ㅖ
linearFullCode.a = linearFullCode.A = 12609, // ㅁ
linearFullCode.s = linearFullCode.S = 12596, // ㄴ
linearFullCode.d = linearFullCode.D = 12615, // ㅇ
linearFullCode.f = linearFullCode.F = 12601, // ㄹ
linearFullCode.g = linearFullCode.G = 12622, // ㅎ
linearFullCode.h = linearFullCode.H = 12631, // ㅗ
linearFullCode.hk = linearFullCode.Hk 
= linearFullCode.HK = linearFullCode.hK = 12632, // ㅘ
linearFullCode.ho = linearFullCode.Ho = 12633, // ㅙ
linearFullCode.hl = linearFullCode.Hl 
= linearFullCode.HL = linearFullCode.hL = 12634, // ㅚ 
linearFullCode.j = linearFullCode.J = 12627, // ㅓ
linearFullCode.k = linearFullCode.K = 12623, // ㅏ
linearFullCode.l = linearFullCode.L = 12643, // ㅣ
linearFullCode.z = linearFullCode.Z = 12619, // ㅋ
linearFullCode.x = linearFullCode.X = 12620, // ㅌ
linearFullCode.c = linearFullCode.C = 12618, // ㅊ
linearFullCode.v = linearFullCode.V = 12621, // ㅍ
linearFullCode.b = linearFullCode.B = 12640, // ㅠ
linearFullCode.n = linearFullCode.N = 12636, //ㅠㅜ
linearFullCode.nj = linearFullCode.Nj 
= linearFullCode.NJ = linearFullCode.nJ = 12637, // ㅝ
linearFullCode.np = linearFullCode.Np = 12638, // ㅞ
linearFullCode.nl = linearFullCode.Nl 
= linearFullCode.NL = linearFullCode.nL = 12639, // ㅟ
linearFullCode.m = linearFullCode.M = 12641, // ㅡ
linearFullCode.ml = linearFullCode.Ml 
= linearFullCode.ML = linearFullCode.ML = 12642; // ㅢ


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
    codeNum = String.prototype.charCodeAt(i);
    if (12610 <= codeNum <= 12642) {
      str += findKey(linearFullCode, codeNum);
      i += 1;
    } else if (0 <= codeNum - 44032 <= 11171) {
      initialJamoValue = floor((codeNum - 44032) / 588);
      for (j = 0, filled = false; j < 28 && !filled; j++) {
        var ans = (codeNum - 44032 - initialJamoValue * 588 - j) / 28;
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
// passed directly