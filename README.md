# CI-on-PR demo

A throwaway repo to feel the pull-request + CI loop end to end.
The tests are browserless pure assertions on purpose — the lesson is the
CI mechanics, not Playwright itself.

## The 15-minute exercise

1. Create a new empty repo on GitHub (call it `ci-demo`), then locally:
       git init && git add . && git commit -m "initial framework + CI"
       git branch -M main
       git remote add origin <your repo url>
       git push -u origin main

2. Start a feature branch (this mimics picking up a ticket):
       git checkout -b test/first-check

3. Make a trivial change (edit README), commit, and push the branch:
       git commit -am "trigger CI"
       git push -u origin test/first-check

4. Open the PR: GitHub prints a "Compare & pull request" link after the push,
   or go to the repo > Pull requests > New. Open it against main.

5. WATCH: on the PR's "Checks" section a yellow dot appears (CI running),
   then green (npm test passed). That green check IS the gate.

6. Now break it: in tests/example.spec.ts change toBe(4) to toBe(5).
   Commit and push to the SAME branch — no new PR needed.
       git commit -am "introduce a regression"
       git push
   The PR check flips to RED. This is the whole point: a bad change is
   caught on the PR, before it reaches main.

7. Turn on the gate: repo Settings > Branches > add a rule for `main` >
   "Require status checks to pass before merging" > select the CI check.
   Now the Merge button is DISABLED while the check is red.

8. Fix it (toBe(5) back to toBe(4)), commit, push. Check goes green,
   Merge button re-enables. Merge it. Done — you just lived the loop.
