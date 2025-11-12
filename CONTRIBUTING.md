---

```md
# 🤝 Contributing Guide

Thank you for considering contributing to Flying-Box! We welcome feature additions, bug fixes, documentation improvements, and code refactors.

---

## 📌 Branching Strategy

Use this branching strategy to keep the codebase organized and collaborative.

### Branch Types

| Branch Name | Purpose                                                 |
| ----------- | ------------------------------------------------------- |
| `main`      | Production-ready, always stable. Deployed to users.     |
| `dev`       | Development branch. Merges features and bug fixes.      |
| `feature/*` | For new features (e.g., `feature/login-page`)           |
| `bugfix/*`  | For non-critical bug fixes (e.g., `bugfix/fix-routing`) |
| `hotfix/*`  | For urgent production fixes                             |
| `release/*` | Final testing and deployment preparation                |

---

## 🔧 How to Contribute

1. **Fork the repository**
2. **Create a branch** off `dev`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit using the conventional commit format
4. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request (PR) into dev

### 🔁 Pull Request Checklist

    •	PR title follows the commit convention (e.g., feat(dispatch): add parcel creation form)
    •	I have tested my code locally
    •	I’ve linked relevant issues using Closes #issue
    •	I’ve written or updated documentation if necessary
    •	I’ve added comments or explanations where needed
    •	I’ve reviewed my changes for typos, styling, and errors

**Note:** Please use “Squash and Merge” when merging to keep a clean Git history.
