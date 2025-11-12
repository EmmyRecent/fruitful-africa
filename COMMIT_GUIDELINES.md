---

```md
# 💬 Commit Message Guidelines

We follow the **Conventional Commits** format to keep our Git history clean and readable.

---

## 🧩 Format

(scope): short summary

### ✅ Examples

- feat(dispatch): implement parcel tracking dashboard
- fix(auth): resolve login session timeout bug
- docs(readme): update installation instructions
- style(navbar): fix mobile alignment
- refactor(api): separate fetch logic into utils  
- chore(deps): update react-router to v6.22.1

---

## 🔠 Allowed Types

| Type       | Use for...                                        |
| ---------- | ------------------------------------------------- |
| `feat`     | A new feature                                     |
| `fix`      | A bug fix                                         |
| `docs`     | Documentation changes only                        |
| `style`    | Changes that don’t affect logic (e.g. formatting) |
| `refactor` | Code refactor without adding features or fixes    |
| `test`     | Adding or fixing tests                            |
| `chore`    | Maintenance tasks (e.g., deps, config)            |

---

## 📌 Notes

- Use imperative tense: `add`, not `added` or `adds`
- Keep messages short and clear
- Use lowercase for type and scope
- Scope is optional but helpful (`auth`, `ui`, `form`, etc.)
