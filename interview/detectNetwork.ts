/*
Could you implement the `detect_network` function to identify the card network based on the given card number?

#| Network		      | IIN (Prefix)	  | Length	|
#| American Express	| 34, 37	        | 15	   	|
#| Diners Club	  	| 38, 39	        | 14	  	|

TEST_CASES = [
    ['341234567890123', 'American Express'],
    ['371234567890123', 'American Express'],
    ['38123456789012', 'Diners Club'],
];

Pseudo Code
- Make sure prefix belongs to the Card Name.
{
    34: "American Expres",
    37: "American Expres",
    38: "Dinners Club",
    39: "Dinners Club"
}

#| Network	  	| IIN (Prefix)		        | Length	    |
#| Visa			    | 4		            		  	| 13, 16, 19	|
#| MasterCard		| 51, 52, 53, 54, 55     	| 16	      	|

TEST_CASES = [
    ...previous test case
    ['4123456789012', 'Visa'],
    ['4123456789012345', 'Visa'],
    ['4123456789012345678', 'Visa'],
    ['5112345678901234', 'MasterCard'],
    ['5212345678901234', 'MasterCard'],
    ['5312345678901234', 'MasterCard'],
    ['5412345678901234', 'MasterCard'],
    ['5512345678901234', 'MasterCard'],
]
*/

export function detectNetwork(cardNumber: string): string {
  const prefixMap = new Map([
    ["MasterCard", [51, 52, 53, 54, 55]],
    ["Visa", [4]],
    ["American Express", [34, 37]],
    ["Diners Club", [38, 39]],
  ]);

  const lengthMap = new Map([
    ["MasterCard", [16]],
    ["Visa", [13, 16, 19]],
    ["American Express", [15]],
    ["Diners Club", [14]],
  ]);

  for (const [network, prefixes] of prefixMap.entries()) {
    const validLengths = lengthMap.get(network) ?? [];

    if (validLengths.includes(cardNumber.length)) {
      // Check if card prefix matches any prefix for this network
      for (const prefix of prefixes) {
        const prefixStr = prefix.toString();
        if (cardNumber.startsWith(prefixStr)) {
          return network;
        }
      }
    }
  }

  return "Identity card not found!";
}

const TEST_CASES = [
  ["5112345678901234"],
  ["5212345678901234"],
  ["5312345678901234"],
  ["5412345678901234"],
  ["5512345678901234"],
  ["4123456789012"],
  ["4123456789012345"],
  ["4123456789012345678"],
  ["38123456789012"],
  ["341234567890123"],
  ["371234567890123"],
];

/* Output
  
   */

TEST_CASES.forEach((testCase) => {
  console.log(detectNetwork(testCase[0]));
});
