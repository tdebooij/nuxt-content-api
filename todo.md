# TODO

**Minimum viable product (due march 2nd)**
- [x] Get module settings from nuxt.config.js in express routes
- [ ] Add github auth to docs/test project
- [ ] Check github auth in api (does it have access to the specified repository)
- [ ] PUT & POST api/content-api/{filename} (with github token and new file data)
  - [ ] Write to content folder(?)
  - [ ] commit & push to repository
- [ ] Create a route for image/static data uploading

**Further plans**
- [ ] Add git current hash to the content-modules' `api/content` (is that even possible)
- [ ] Check hash when POSTing content (is the latest file being posted)
- [ ] Create `api/content-api/diff` that returns diff between the given hash and the current head
- [ ] Create preview api/ way to preview data before pushing (live and to git)
