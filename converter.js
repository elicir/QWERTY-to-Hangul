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
  initialJamoValue = -1;
  medialJamoValue = -1;
  finalJamoValue = -1;
  hangul = ''
  var codeNum = 0
  // I don't think any of this is right, we have to rethink this design
  // we need to build the syllable blocks and reset to a default "not block 
  // building" state 
  for (i = 0; i < input.length;) {
    // First character is a vowel part
    if (i === 0 && input.substring(i, i+1) in medialJamo) {
      if (input.substring(i, i+2) in medialJamo) {
        hangul += String.fromCharCode(linearFullCode[input.substring(0, 2)]);
        i += 2;
      } else {
        hangul += String.fromCharCode(linearFullCode[input.substring(0, 1)]);
        i += 1;
      }
    } else if (input.substring(i, i+1) in initialJamo) {
        hangul += String.fromCharCode(linearFullCode[input.substring(i, i+1)]);
        i += 1;
        if (input.substring(i, i+1) in medialJamo) {
          initialJamoValue = initialJamo[input.substring(i-1, i)];
          medialJamoValue = medialJamo[input.substring(i, i+1)];
          codeNum = ((initialJamoValue * 588) + (medialJamoValue * 28) + 0) + 44032;
          hangul = String.fromCharCode(codeNum); // Have to replace only the char b4 medial 
          i += 1;
        } else {
          hangul += String.fromCharCode(linearFullCode[input.substring(i, i+1)]);
          i += 1;
        }
    }
  }
  hangulBox.value = hangul;
}