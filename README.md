# WiCS Website

This repository is for the [WiCS@JHU website](https://wicsjhu.github.io).

WiCS@JHU is built with [Jekyll](https://jekyllrb.com). To get started:

- [Follow the Jekyll installation instructions](https://jekyllrb.com/docs/installation/)
- Run `jekyll build` to create the site under `_site`, or `jekyll serve` to view the site locally

## Adding/updating a member
To add a member:

1. Add a file under `_members`
2. Optional: Add a photo under `assets/images/members` and link in member file

> Tip: Use the order list in `_config.yml` to order the exec members first!
All other members will appear in alphabetical file order.


## Adding a sponsor
To add a sponsor to the home page:

1. Add an image (logo) under the `assets/images/sponsors` directory
2. Add the sponsor's name and image path to `_data/sponsors.yml`


## Updating contact info
To update contact cards, update `_data/contacts.yml`.

Icon names are from [Google Material Symbols](https://fonts.google.com/icons).
