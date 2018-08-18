# Cryptor

## Simple utilities for basic cryptanalysis

- Currently supports mono- and polyalphabetic substitution ciphers

### How To Use

#### Install

- `yarn` or `npm install`

#### Run

- For monoalphabetic substitution ciphers, run `yarn start /path/to/encrypted/file`. This will ouput the cipher alphabet with the count and frequency for each letter. With this information, you can easily do frequency analysis on the text to decipher it. To see a sample, simply run `yarn start`. The ciphertext will output first:

```
Ciphertext:
  BT JPX RMLX PCUV AMLX ICVJP IBTWXVR CI M LMT'R PMTN, MTN YVCJX CDXV MWMBTRJ JPX AMTNGXRJBAH UQCT JPX QGMRJXV CI JPX YMGG CI JPX HBTW'R QMGMAX; MTN JPX HBTW RMY JPX QMVJ CI JPX PMTN JPMJ YVCJX. JPXT JPX HBTW'R ACUTJXTMTAX YMR APMTWXN, MTN PBR JPCUWPJR JVCUFGXN PBL, RC JPMP JPX SCBTJR CI PBR GCBTR YXVX GCCRXN, MTN PBR HTXXR RLCJX CTX MWMBTRJ MTCJPXV. JPX HBTW AVBXN MGCUN JC FVBTW BT JPX MRJVCGCWXVR, JPX APMGNXMTR, MTN JPX RCCJPRMEXVR. MTN JPX HBTW RQMHX, MTN RMBN JC JPX YBRX LXT CI FMFEGCT, YPCRCXDXV RPMGG VXMN JPBR YVBJBTW, MTN RPCY LX JPX BTJXVQVXJMJBCT JPXVXCI, RPMGG FX AGCJPXN YBJP RAMVGXJ, MTN PMDX M APMBT CI WCGN MFCUJ PBR TXAH, MTN RPMGG FX JPX JPBVN VUGXV BT JPX HBTWNCL. JPXT AMLX BT MGG JPX HBTW'R JBRX LXT; FUJ JPXE ACUGN TCJ VXMN JPX YVBJBTW, TCV LMHX HTCYT JC JPX HBTW JPX BTJXVQVXJMJBCT JPXVXCI. JPXT YMR HBTW FXGRPMOOMV WVXMJGE JVCUFGXN, MTN PBR ACUTJXTMTAX YMR APMTWXN BT PBL, MTN PBR GCVNR YXVX MRJCTBRPXN. TCY JPX KUXXT, FE VXMRCT CI JPX YCVNR CI JPX HBTW MTN PBR GCVNR, AMLX BTJC JPX FMTKUXJ PCURX; MTN JPX KUXXT RQMHX MTN RMBN, C HBTW, GBDX ICVXDXV; GXJ TCJ JPE JPCUWPJR JVCUFGX JPXX, TCV GXJ JPE ACUTJXTMTAX FX APMTWXN; JPXVX BR M LMT BT JPE HBTWNCL, BT YPCL BR JPX RQBVBJ CI JPX PCGE WCNR; MTN BT JPX NMER CI JPE IMJPXV GBWPJ MTN UTNXVRJMTNBTW MTN YBRNCL, GBHX JPX YBRNCL CI JPX WCNR, YMR ICUTN BT PBL; YPCL JPX HBTW TXFUAPMNTXOOMV JPE IMJPXV, JPX HBTW, B RME, JPE IMJPXV, LMNX LMRJXV CI JPX LMWBABMTR, MRJVCGCWXVR, APMGNXMTR, MTN RCCJPRMEXVR; ICVMRLUAP MR MT XZAXGGXTJ RQBVBJ, MTN HTCYGXNWX, MTN UTNXVRJMTNBTW, BTJXVQVXJBTW CI NVXMLR, MTN RPCYBTW CI PMVN RXTJXTAXR, MTN NBRRCGDBTW CI NCUFJR, YXVX ICUTN BT JPX RMLX NMTBXG, YPCL JPX HBTW TMLXN FXGJXRPMOOMV; TCY GXJ NMTBXG FX AMGGXN, MTN PX YBGG RPCY JPX BTJXVQVXJMJBCT. JPX IBVRJ ACNXYCVN BR CJPXGGC.
```

Then the frequency table:

```js
Frequencies:
  {
    A: { count: 30, frequency: '2.1%' },
    B: { count: 89, frequency: '6.3%' },
    C: { count: 101, frequency: '7.1%' },
    D: { count: 6, frequency: '0.4%' },
    E: { count: 15, frequency: '1%' },
    F: { count: 18, frequency: '1.2%' },
    G: { count: 53, frequency: '3.7%' },
    H: { count: 24, frequency: '1.6%' },
    I: { count: 28, frequency: '1.9%' },
    J: { count: 130, frequency: '9.2%' },
    K: { count: 3, frequency: '0.1%' },
    L: { count: 28, frequency: '1.9%' },
    M: { count: 118, frequency: '8.3%' },
    N: { count: 75, frequency: '5.3%' },
    O: { count: 6, frequency: '0.4%' },
    P: { count: 113, frequency: '8%' },
    Q: { count: 12, frequency: '0.8%' },
    R: { count: 91, frequency: '6.4%' },
    S: { count: 1, frequency: '0.1' },
    T: { count: 131, frequency: '9.2%' },
    U: { count: 26, frequency: '1.8%' },
    V: { count: 68, frequency: '4.8%' },
    W: { count: 40, frequency: '2.8%' },
    X: { count: 168, frequency: '11.9%' },
    Y: { count: 31, frequency: '2.1%' },
    Z: { count: 1, frequency: '0.1' }
  }
```

- (WIP) For polyalphabetic substitution ciphers (specifically the Vigenère cipher), run `yarn vigenere /path/to/encrypted/file`. This will ouput the repeated sequences with the count for each and the distances between each instance. To see a sample, simply run `yarn vigenere`.

---

### TODO

#### v0.1

- Compare ouputted frequencies with standard frequency tables for various topics in the English language
- Convert to proper CLI

#### v0.2

- Create interactive UI with file upload and written input

#### v0.3

- Implement suggested frequency analysis results that can be modified by the user
