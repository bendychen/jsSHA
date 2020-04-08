import { describe, it } from "mocha";
import { assert } from "chai";
import rewire from "rewire";
import sinon from "sinon";
import { runHashTests } from "./common";
import { Int_64 } from "../../src/primitives_64";

const sha3 = rewire("../../src/sha3");

const newState = [
  [new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0)],
  [new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0)],
  [new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0)],
  [new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0)],
  [new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0)],
];

describe("Test getNewState", () => {
  const getNewState = sha3.__get__("getNewState");

  it("For All Variants", () => {
    assert.deepEqual(getNewState("SHA3-224"), newState);
  });
});

describe("Test cloneSHA3State", () => {
  const cloneSHA3State = sha3.__get__("cloneSHA3State");

  const state = [
    [new Int_64(0, 1), new Int_64(0, 2), new Int_64(0, 3), new Int_64(0, 4), new Int_64(0, 5)],
    [new Int_64(0, 6), new Int_64(0, 7), new Int_64(0, 8), new Int_64(0, 9), new Int_64(0, 0xa)],
    [new Int_64(0, 0xb), new Int_64(0, 0xc), new Int_64(0, 0xd), new Int_64(0, 0xb), new Int_64(0, 0xf)],
    [new Int_64(0, 0x10), new Int_64(0, 0x11), new Int_64(0, 0x12), new Int_64(0, 0x3), new Int_64(0, 0x14)],
    [new Int_64(0, 0x15), new Int_64(0, 0x16), new Int_64(0, 0x17), new Int_64(0, 0x18), new Int_64(0, 0x19)],
  ];

  it("For All Variants", () => {
    assert.notEqual(cloneSHA3State(state), state);
    assert.deepEqual(cloneSHA3State(state), state);
  });
});

const firstBlockData = [
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
  ],
  secondBlockData = [
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
    0xa3a3a3a3,
  ],
  firstRoundOut = [
    [
      new Int_64(0xeb978426 | 0, 0x96183af8 | 0),
      new Int_64(0x9d496fc8 | 0, 0x38c484c1),
      new Int_64(0x2a88a8d6, 0xa2b58c95 | 0),
      new Int_64(0x696b56da, 0xd2a21e12 | 0),
      new Int_64(0x61e6c4b1, 0x36f037af),
    ],
    [
      new Int_64(0x69a545c5, 0xbcd98904 | 0),
      new Int_64(0xb3c1a6ee | 0, 0xf70e64ca | 0),
      new Int_64(0x2bc5a576, 0x8e4b031e | 0),
      new Int_64(0x00160fd1, 0x39b25ea3),
      new Int_64(0xe110f5f3 | 0, 0x7c21ee03),
    ],
    [
      new Int_64(0x051ab172, 0xefec2a11 | 0),
      new Int_64(0x0717aa80, 0x6b76f423),
      new Int_64(0x40bc4708, 0x962c33af | 0),
      new Int_64(0x753c893b, 0x1ba1073f),
      new Int_64(0xca2f0e49 | 0, 0x94d2b5c7 | 0),
    ],
    [
      new Int_64(0xd0e7a0d3 | 0, 0x0198e5f0),
      new Int_64(0x4ba97add, 0x188b278d),
      new Int_64(0xaad7b3e2 | 0, 0xc495a09f | 0),
      new Int_64(0x98cab7f5 | 0, 0xb03706c6 | 0),
      new Int_64(0x1ffbf969, 0xd632bdcc | 0),
    ],
    [
      new Int_64(0xe929d594 | 0, 0xe5b1f575 | 0),
      new Int_64(0xcff5e41b | 0, 0x8cb02d2e | 0),
      new Int_64(0x72e2e510, 0x135deb94),
      new Int_64(0x90486e90 | 0, 0x8cdee9e9 | 0),
      new Int_64(0x85f8d46e | 0, 0x7687cf97),
    ],
  ];

describe("Test roundSHA3", () => {
  const roundSHA3 = sha3.__get__("roundSHA3");

  it("With NIST Test Inputs", () => {
    assert.deepEqual(roundSHA3(firstBlockData, newState.slice()), firstRoundOut);
  });
});

describe("Test finalizeSHA3", () => {
  const secondRoundOut = [
    [
      new Int_64(0x723f50ba, 0x6a817693),
      new Int_64(0xec5df904, 0x614aa708),
      new Int_64(0x197049b8, 0xdda189c8),
      new Int_64(0x3bd506da, 0x39e7d35a),
      new Int_64(0xad0d6399, 0x1dc79bfe),
    ],
    [
      new Int_64(0x5d09ac65, 0xebe76cf9),
      new Int_64(0xce8c4fd8, 0x506905f9),
      new Int_64(0x67fe1d38, 0x84929d0b),
      new Int_64(0x9a67ce20, 0x6438317f),
      new Int_64(0x5a1232fd, 0x93c86c97),
    ],
    [
      new Int_64(0xa1c2bbf9, 0x4bbee3ee),
      new Int_64(0x9016c3b5, 0x88af0041),
      new Int_64(0x2f107593, 0x10e5edff),
      new Int_64(0x53107e48, 0x638bf9b3),
      new Int_64(0x3d84dd91, 0xcb47f40b),
    ],
    [
      new Int_64(0x72720881, 0xe0117ecb),
      new Int_64(0xbcb431cb, 0x0c60de63),
      new Int_64(0x6f594cfb, 0x0edbd537),
      new Int_64(0x81969e6b, 0xbcca9a95),
      new Int_64(0x85dbad55, 0x27a83a08),
    ],
    [
      new Int_64(0x4c65a078, 0x55cbc1cd),
      new Int_64(0x3feeaaa3, 0x78ff4346),
      new Int_64(0x153781f4, 0xc1b855bf),
      new Int_64(0x046b7838, 0x59f40378),
      new Int_64(0x41877fc5, 0xaaf62005),
    ],
  ];

  it("With NIST Test Inputs", () => {
    const roundStub = sinon.stub().onCall(0).returns(firstRoundOut).onCall(1).returns(secondRoundOut),
      finalizeSHA3 = sha3.__get__("finalizeSHA3"),
      revert = sha3.__set__("roundSHA3", roundStub);
    assert.deepEqual(
      finalizeSHA3(firstBlockData.concat(secondBlockData), 1600, -1, newState.slice(), 1152, 0x06, 224),
      [0x6a817693, 0x723f50ba, 0xebe76cf9, 0x5d09ac65, 0x4bbee3ee, 0xa1c2bbf9, 0xe0117ecb]
    );
    revert();
  });
});

describe("Test jsSHA(SHA3)", () => {
  const jsSHA = sha3.__get__("jsSHA");
  class jsSHAATest extends jsSHA {
    constructor(
      variant: "SHA3-224" | "SHA3-256" | "SHA3-384" | "SHA3-512" | "SHAKE128" | "SHAKE256",
      inputFormat: "HEX" | "TEXT" | "B64" | "BYTES" | "ARRAYBUFFER" | "UINT8ARRAY",
      options?: { encoding?: "UTF8" | "UTF16BE" | "UTF16LE"; numRounds?: number }
    ) {
      super(variant, inputFormat, options);
    }

    /*
     * Dirty hack function to expose the protected members of jsSHABase
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getter(propName: string): any {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore - Override "any" ban as this is only used in testing
      return this[propName];
    }
  }

  [
    { variant: "SHA3-224", outputBinLen: 224, variantBlockSize: 1152, delimiter: 0x06, isSHAKE: false },
    { variant: "SHA3-256", outputBinLen: 256, variantBlockSize: 1088, delimiter: 0x06, isSHAKE: false },
    { variant: "SHA3-384", outputBinLen: 384, variantBlockSize: 832, delimiter: 0x06, isSHAKE: false },
    { variant: "SHA3-512", outputBinLen: 512, variantBlockSize: 576, delimiter: 0x06, isSHAKE: false },
    { variant: "SHAKE128", outputBinLen: -1, variantBlockSize: 1344, delimiter: 0x1f, isSHAKE: true },
    { variant: "SHAKE256", outputBinLen: -1, variantBlockSize: 1088, delimiter: 0x1f, isSHAKE: true },
  ].forEach((test) => {
    it(`${test.variant} State Initialization`, () => {
      /*
       * Check a few basic things:
       *   1. All of the variant parameters are correct
       *   2. Calling stateClone function returns a *copy* of the state
       *   3. Calling roundFunc, newStateFunc, and finalizeFunc call the expected functions
       */
      sinon.reset();
      const roundFuncSpy = sinon.spy(),
        finalizeFuncSpy = sinon.spy(),
        newStateFuncSpy = sinon.spy(),
        roundRevert = sha3.__set__("roundSHA3", roundFuncSpy),
        finalizeRevert = sha3.__set__("finalizeSHA3", finalizeFuncSpy),
        newStateRevert = sha3.__set__("getNewState", newStateFuncSpy),
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        hash = new jsSHAATest(test.variant, "HEX");

      // Check #1
      assert.equal(hash.getter("bigEndianMod"), 1);
      assert.equal(hash.getter("variantBlockSize"), test.variantBlockSize);
      assert.equal(hash.getter("outputBinLen"), test.outputBinLen);
      assert.equal(hash.getter("isSHAKE"), test.isSHAKE);

      // Check #2
      const state = [[0xdeadbeef], [0xdeadbeef], [0xdeadbeef], [0xdeadbeef], [0xdeadbeef]];
      const clonedState = hash.getter("stateCloneFunc")(state);
      assert.notEqual(state, clonedState);
      assert.deepEqual(state, clonedState);

      // Check #3
      hash.getter("roundFunc")([0xdeadbeef], [[0xfacefeed]]);
      assert.isTrue(roundFuncSpy.lastCall.calledWithExactly([0xdeadbeef], [[0xfacefeed]]));

      //hash.getter("newStateFunc")(test.variant);
      assert.isTrue(newStateFuncSpy.lastCall.calledWithExactly(test.variant));

      hash.getter("finalizeFunc")([0xdeadbeef], 32, 0, [[0xfacefeed]], test.outputBinLen);
      assert.isTrue(
        finalizeFuncSpy.lastCall.calledWithExactly(
          [0xdeadbeef],
          32,
          0,
          [[0xfacefeed]],
          test.variantBlockSize,
          test.delimiter,
          test.outputBinLen
        )
      );

      roundRevert();
      finalizeRevert();
      newStateRevert();
    });
  });

  it("With Invalid Variant", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore - Deliberate bad variant value to test exceptions
    assert.throws(() => new jsSHA("SHA-TEST", "HEX"), "Chosen SHA variant is not supported");
  });
});

runHashTests("SHA3-224", sha3.__get__("jsSHA"));
runHashTests("SHA3-256", sha3.__get__("jsSHA"));
runHashTests("SHA3-384", sha3.__get__("jsSHA"));
runHashTests("SHA3-512", sha3.__get__("jsSHA"));
runHashTests("SHAKE128", sha3.__get__("jsSHA"));
runHashTests("SHAKE256", sha3.__get__("jsSHA"));
