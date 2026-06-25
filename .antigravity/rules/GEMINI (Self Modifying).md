# Agent Instructions

Read this entire file before starting any task.

## Self-Correcting Rules Engine

This file contains a growing ruleset that improves over time. **At session start, read the entire "Learned Rules" section before doing anything.**

### How it works

1. When the user corrects you or you make a mistake, **immediately append a new rule** to the "Learned Rules" section at the bottom of this file.
2. Rules are numbered sequentially and written as clear, imperative instructions.
3. Format: `N. [CATEGORY] Never/Always do X — because Y.`
4. Categories: `[STYLE]`, `[CODE]`, `[ARCH]`, `[TOOL]`, `[PROCESS]`, `[DATA]`, `[UX]`, `[OTHER]`
5. Before starting any task, scan all rules below for relevant constraints.
6. If two rules conflict, the higher-numbered (newer) rule wins.
7. Never delete rules. If a rule becomes obsolete, append a new rule that supersedes it.

### When to add a rule

- User explicitly corrects your output ("no, do it this way")
- User rejects a file, approach, or pattern
- You hit a bug caused by a wrong assumption about this codebase
- User states a preference ("always use X", "never do Y")

### Rule format example

```
14. [CODE] Always use `bun` instead of `npm` — user preference, bun is installed globally.
15. [STYLE] Never add emojis to commit messages — project convention.
16. [ARCH] API routes live in `src/server/routes/`, not `src/api/` — existing codebase pattern.
```

---

## Learned Rules

<!-- New rules are appended below this line. Do not edit above this section. -->
1. [PROCESS] For every task larger than a small task, always provide options as to what model would be best suited for it and allow the user to switch to it before continuing.


1. [ARCH] Always use Gemini for all frontend design work — user preference, Gemini handles UI/UX.
2. [ARCH] Always use Claude for all backend logic — user preference, Claude handles server-side and API work.
3. [PROCESS] Never start making changes to the website until the user explicitly says "go ahead" or gives a clear green light — user requires approval before execution.
4. [DATA] Always scrape ALL pages of the website thoroughly and verify completeness before designing or building anything — partial scraping led to missing sections.
5. [UX] The new v2 website must mirror the exact same sections and navigation structure as the v1 website — do not add, remove, or reorder nav items without explicit approval.
6. [PROCESS] Always do research and investigation thoroughly before proposing or making changes — do not make assumptions about content structure.
7. [PROCESS] At the start of every session or new task, always list folder names (`list_dir`) in `C:\Users\Admin\Desktop\JARVIS\Skills for AI` to index available skills. Analyze this index against the current task and only read (`view_file`) relevant skill files to keep token consumption minimal while maximizing database utility.
