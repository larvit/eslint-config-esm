import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";

import config from "../index.js";

const here = dirname(fileURLToPath(import.meta.url));
const linter = new Linter();
const lintFixture = name => linter.verify(readFileSync(join(here, "fixtures", name), "utf8"), config, { filename: name });

test("clean ESM code passes with no messages", () => {
	const messages = lintFixture("good.js");

	assert.deepEqual(messages, [], JSON.stringify(messages, null, 2));
});

test("both core and @stylistic rules report violations", () => {
	const ruleIds = new Set(lintFixture("bad.js").map(message => message.ruleId));

	for (const expected of ["@stylistic/indent", "@stylistic/quotes", "@stylistic/semi", "eqeqeq", "no-var"]) {
		assert.ok(ruleIds.has(expected), `expected rule ${expected}, got: ${[...ruleIds].join(", ")}`);
	}
});
