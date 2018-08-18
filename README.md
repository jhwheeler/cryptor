# Cryptor

## Simple utilities for basic cryptanalysis

These tools are designed to help budding cryptanalysts learn the building blocks of cryptography and cryptanalysis. Currently supports monoalphabetic substitution ciphers and polyalphabetic Vigenere ciphers.

### How To Use

#### Install

- `yarn` or `npm install`

#### Run

- Run `yarn analyse` followed by the cipher type - `mono` or `poly` - and the path to the encrypted file (optional - if blank, a sample ciphertext will be used).

### Examples

#### Monoalphabetic substitution cipher

- `yarn analyse mono /path/to/encrypted/file`

This will ouput the cipher alphabet with the count and frequency for each letter. With this information, you can easily do frequency analysis on the text to decipher it.

**Output**:

```js
Ciphertext: `
  BT JPX RMLX PCUV AMLX ICVJP IBTWXVR CI M LMT'R PMTN, MTN YVCJX
  CDXV MWMBTRJ JPX AMTNGXRJBAH UQCT JPX QGMRJXV CI JPX YMGG CI JPX
  HBTW'R QMGMAX; MTN JPX HBTW RMY JPX QMVJ CI JPX PMTN JPMJ YVCJX.
  JPXT JPX HBTW'R ACUTJXTMTAX YMR APMTWXN, MTN PBR JPCUWPJR JVCUFGXN PBL,
  RC JPMP JPX SCBTJR CI PBR GCBTR YXVX GCCRXN, MTN PBR HTXXR RLCJX CTX
  MWMBTRJ MTCJPXV. JPX HBTW AVBXN MGCUN JC FVBTW BT JPX MRJVCGCWXVR, JPX
  APMGNXMTR, MTN JPX RCCJPRMEXVR. MTN JPX HBTW RQMHX, MTN RMBN JC JPX YBRX
  LXT CI FMFEGCT, YPCRCXDXV RPMGG VXMN JPBR YVBJBTW, MTN RPCY LX JPX
  BTJXVQVXJMJBCT JPXVXCI, RPMGG FX AGCJPXN YBJP RAMVGXJ, MTN PMDX M APMBT
  CI WCGN MFCUJ PBR TXAH, MTN RPMGG FX JPX JPBVN VUGXV BT JPX HBTWNCL.
  JPXT AMLX BT MGG JPX HBTW'R JBRX LXT; FUJ JPXE ACUGN TCJ VXMN JPX YVBJBTW,
  TCV LMHX HTCYT JC JPX HBTW JPX BTJXVQVXJMJBCT JPXVXCI. JPXT YMR HBTW
  FXGRPMOOMV WVXMJGE JVCUFGXN, MTN PBR ACUTJXTMTAX YMR APMTWXN BT PBL, MTN
  PBR GCVNR YXVX MRJCTBRPXN. TCY JPX KUXXT, FE VXMRCT CI JPX YCVNR CI JPX
  HBTW MTN PBR GCVNR, AMLX BTJC JPX FMTKUXJ PCURX; MTN JPX KUXXT RQMHX MTN
  RMBN, C HBTW, GBDX ICVXDXV; GXJ TCJ JPE JPCUWPJR JVCUFGX JPXX, TCV GXJ JPE
  ACUTJXTMTAX FX APMTWXN; JPXVX BR M LMT BT JPE HBTWNCL, BT YPCL BR JPX RQBVBJ
  CI JPX PCGE WCNR; MTN BT JPX NMER CI JPE IMJPXV GBWPJ MTN UTNXVRJMTNBTW MTN
  YBRNCL, GBHX JPX YBRNCL CI JPX WCNR, YMR ICUTN BT PBL; YPCL JPX HBTW
  TXFUAPMNTXOOMV JPE IMJPXV, JPX HBTW, B RME, JPE IMJPXV, LMNX LMRJXV CI JPX
  LMWBABMTR, MRJVCGCWXVR, APMGNXMTR, MTN RCCJPRMEXVR; ICVMRLUAP MR MT XZAXGGXTJ
  RQBVBJ, MTN HTCYGXNWX, MTN UTNXVRJMTNBTW, BTJXVQVXJBTW CI NVXMLR, MTN RPCYBTW
  CI PMVN RXTJXTAXR, MTN NBRRCGDBTW CI NCUFJR, YXVX ICUTN BT JPX RMLX NMTBXG,
  YPCL JPX HBTW TMLXN FXGJXRPMOOMV; TCY GXJ NMTBXG FX AMGGXN, MTN PX YBGG RPCY
  JPX BTJXVQVXJMJBCT. JPX IBVRJ ACNXYCVN BR CJPXGGC.`

Analysis:
{
  A: {
    count: 30,
    frequency: "2.1%"
  },
  B: {
    count: 89,
    frequency: "6.3%"
  },
  C: {
    count: 101,
    frequency: "7.1%"
  },
  D: {
    count: 6,
    frequency: "0.4%"
  },
  E: {
    count: 15,
    frequency: "1%"
  },
  F: {
    count: 18,
    frequency: "1.2%"
  },
  G: {
    count: 53,
    frequency: "3.7%"
  },
  H: {
    count: 24,
    frequency: "1.6%"
  },
  I: {
    count: 28,
    frequency: "1.9%"
  },
  J: {
    count: 130,
    frequency: "9.2%"
  },
  K: {
    count: 3,
    frequency: "0.1%"
  },
  L: {
    count: 28,
    frequency: "1.9%"
  },
  M: {
    count: 118,
    frequency: "8.3%"
  },
  N: {
    count: 75,
    frequency: "5.3%"
  },
  O: {
    count: 6,
    frequency: "0.4%"
  },
  P: {
    count: 113,
    frequency: "8%"
  },
  Q: {
    count: 12,
    frequency: "0.8%"
  },
  R: {
    count: 91,
    frequency: "6.4%"
  },
  S: {
    count: 1,
    frequency: "0.1"
  },
  T: {
    count: 131,
    frequency: "9.2%"
  },
  U: {
    count: 26,
    frequency: "1.8%"
  },
  V: {
    count: 68,
    frequency: "4.8%"
  },
  W: {
    count: 40,
    frequency: "2.8%"
  },
  X: {
    count: 168,
    frequency: "11.9%"
  },
  Y: {
    count: 31,
    frequency: "2.1%"
  },
  Z: {
    count: 1,
    frequency: "0.1"
  }
}
```

#### Polyalphabetic substitution cipher (specifically Vigenère cipher)

- Analyse a polyalphabetic cipher: `yarn analyse poly /path/to/encrypted/file`

This will ouput the repeated sequences with the count for each and the distances between each instance.

**Output**:

```js
Ciphertext: `
KQOWEFVJPUJUUNUKGLMEKJINMWUXFQMKJBGWRLFNFGHUDWUUMBSVLPSNCMUEKQ
CTESWREEKOYSSIWCTUAXYOTAPXPLWPNTCGOJBGFQHTDWXIZAYGFFNSXCSEYNCT
SSPNTUJNYTGGWZGRWUUNEJUUQEAPYMEKQHUIDUXFPGUYTSMTFFSHNUOCZGMRUW
EYTRGKMEEDCTVRECFBDJQCUSWVBPNLGOYLSKMTEFVJJTWWMFMWPNMEMTMHRSPX
FSSKFFSTNUOCZGMDOEOYEEKCPJRGPMURSKHFRSEIUEVGOYCWXIZAYGOSAANYDO
EOYJLWUNHAMEBFELXYVLWNOJNSIOFRWUCCESWKVIDGMUCGOCRUWGNMAAFFVNSI
UDEKQHCEUCPFCMPVSUDGAVEMNYMAMVLFMAOYFNTQCUAFVFJNXKLNEIWCWODCCU
LWRIFTWGMUSWOVMATNYBUHTCOCWFYTNMGYTQMKBBNLGFBTWOJFTWGNTEJKNEED
CLDHWTVBUVGFBIJGYYIDGMVRDGMPLSWGJLAGOEEKJOFEKNYNOLRIVRWVUHEIWU
URWGMUTJCDBNKGMBIDGMEEYGUOTDGGQEUJYOTVGGBRUJYS`;

Analysis: [
  {
    EFVJ: {
      count: 2,
      distances: [55]
    },
    NUOC: {
      count: 2,
      distances: [20]
    },
    WGMU: {
      count: 2,
      distances: [30]
    }
  },
  {
    WXIZA: {
      count: 2,
      distances: [38]
    }
  }
];
```

- There is an additional, optional parameter: keyword length. After having done the basic analysis, you can split the text encrypted with a Vigenere cipher into the number of alphabets corresponding to the guessed keyword length. This example uses a keyword length of 5: `yarn analyse /path/to/encrypted/file 5`

**Output**:

```js
Individual ciphertexts:

Text 0:
"K,F,J,K,K,W,M,W,F,W,S,N,K,S,K,I,A,A,W,G,F,W,Y,S,Y,S,J,G,W,J,A,K,D,G,M,H,Z,W,G,D,E,J,W,L,S,F,W,W,M,S,S,T,Z,E,K,G,S,S,V,W,Y,A,E,W,M,L,W,S,W,S,D,G,W,A,S,K,U,M,D,M,M,A,T,F,X,I,D,W,W,W,T,H,W,M,M,L,W,W,J,D,W,V,J,D,D,S,A,K,K,L,W,I,W,J,K,D,Y,D,U,V,U"

Text 1:
"Q,V,U,G,J,U,K,R,G,U,V,C,Q,W,O,W,X,P,P,O,Q,X,G,X,N,P,N,W,U,U,P,Q,U,U,T,N,G,E,K,C,C,Q,V,G,K,V,W,P,T,P,K,N,G,O,C,P,K,E,G,X,G,N,O,U,E,X,N,I,U,W,G,O,G,F,I,Q,C,P,G,N,V,O,Q,V,K,W,C,R,G,O,N,T,F,G,K,G,O,G,K,C,T,G,G,G,G,W,G,J,N,R,V,W,G,C,G,G,G,G,J,G,J"

Text 2:
"O,J,U,L,I,X,J,L,H,U,L,M,C,R,Y,C,Y,X,N,J,H,I,F,C,C,N,Y,Z,U,U,Y,H,X,Y,F,U,M,Y,M,T,F,C,B,O,M,J,M,N,M,X,F,U,M,Y,P,M,H,I,O,I,O,Y,Y,N,B,Y,O,O,C,K,M,C,N,F,U,H,P,V,A,Y,L,Y,C,F,L,C,C,I,M,V,Y,C,Y,Y,B,F,J,N,N,L,V,F,Y,M,M,G,O,O,Y,I,U,U,M,D,M,M,U,G,Y,G,Y"

Text 3:
"W,P,N,M,N,F,B,F,U,M,P,U,T,E,S,T,O,P,T,B,T,Z,F,S,T,T,T,G,N,Q,M,U,F,T,F,O,R,T,E,V,B,U,P,Y,T,J,F,M,H,F,F,O,D,E,J,U,F,U,Y,Z,S,D,J,H,F,V,J,F,C,V,U,R,M,V,D,C,F,S,V,M,F,F,U,J,N,W,U,F,U,M,B,O,T,T,B,B,F,T,E,D,B,B,Y,V,P,J,E,F,N,V,H,U,U,B,B,E,O,Q,O,B,S"

Text 4:
"E,U,U,E,M,Q,G,N,D,B,S,E,E,E,S,U,T,L,C,G,D,A,N,E,S,U,G,R,E,E,E,I,P,S,S,C,U,R,E,R,D,S,N,L,E,T,M,E,R,S,S,C,O,E,R,R,R,E,C,A,A,O,L,A,E,L,N,R,E,I,C,U,A,N,E,E,C,U,E,A,M,N,A,N,E,O,L,T,S,A,U,C,N,Q,N,T,T,E,E,H,U,I,I,R,L,L,E,E,O,R,E,R,T,N,I,E,T,E,T,R"
```

---

### TODO

#### v0.1

- Compare ouputted frequencies with standard frequency tables for the English language
- Convert to proper CLI

#### v0.2

- Create interactive UI with file upload and written input

#### v0.3

- Implement suggested frequency analysis results that can be modified by the user
- Display, based on the above, potential deciphered plaintext
