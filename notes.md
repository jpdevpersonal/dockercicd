# Creating Reusable Steps in GitHub Actions using YAML

You can create reusable steps in GitHub Actions using YAML through several methods:

## 1. Composite Actions

Composite actions allow you to create reusable units of steps that can be called from other workflows.

### Example: Composite Action

File: `.github/actions/setup-and-test/action.yml`

```yaml
name: 'Setup and Test'
description: 'Setup the environment and run tests'
runs:
  using: "composite"
  steps:
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '14'
    - name: Install dependencies
      run: npm ci
      shell: bash
    - name: Run tests
      run: npm test
      shell: bash
```

### Using the Composite Action

File: `.github/workflows/main.yml`

```yaml
name: Main Workflow

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: ./.github/actions/setup-and-test
```

## 2. Reusable Workflows

Reusable workflows allow you to create entire job definitions that can be reused across different workflows.

### Example: Reusable Workflow

File: `.github/workflows/reusable-build.yml`

```yaml
name: Reusable Build Workflow

on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ inputs.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ inputs.node-version }}
      - run: npm ci
      - run: npm run build
```

### Calling the Reusable Workflow

File: `.github/workflows/caller.yml`

```yaml
name: Caller Workflow

on: [push]

jobs:
  call-workflow:
    uses: ./.github/workflows/reusable-build.yml
    with:
      node-version: '14'
```

## 3. Reusable Step Definitions

While GitHub Actions doesn't have a native way to define reusable individual steps, you can achieve something similar using shell scripts or custom actions.

### Example: Shell Script

File: `scripts/setup.sh`

```bash
#!/bin/bash
set -e

echo "Setting up environment..."
npm ci
echo "Setup complete."
```

### Using the Shell Script in a Workflow

File: `.github/workflows/workflow-with-script.yml`

```yaml
name: Workflow with Script

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup environment
        run: |
          chmod +x ./scripts/setup.sh
          ./scripts/setup.sh
      - name: Build
        run: npm run build
```

## Conclusion

These methods allow you to create reusable components in your GitHub Actions workflows:

1. Composite actions are best for reusable sets of steps.
2. Reusable workflows are ideal for entire job definitions that you want to reuse.
3. Shell scripts can be used for reusable step definitions, although they're not as integrated into the GitHub Actions ecosystem.

Remember to commit all these files to your repository in their respective locations. The exact method you choose depends on your specific needs and the level of reusability you're aiming for.
