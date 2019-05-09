# Logan

- [Gatsby](https://gatsbyjs.org) Boilerplate which uses the Headless CMS [Prismic](https://prismic.io/)
- Named after a [wizard](https://github.com/samlogan) 🧙
- Built and used by the folks at [Little & Big](https://www.littleandbig.com.au/)
- Forked from [gatsby-starter-prismic](https://github.com/LekoArts/gatsby-starter-prismic/) by [LekoArts](https://github.com/LekoArts).

## Getting Started

### 1. Configure Project Secrets

Using `.env.development-template` and `.env.production-template` create:
```
.env.development
// and
.env.production
```

These two files will contain any secret values involved in your project, such as
API keys, credentials, etc. They will not be committed to git.

Connect your Prismic CMS Repo to the project by editing the following
environmental variables:
```
PRISMIC_REPO_NAME=your-prismic-repo
PRISMIC_API_KEY=YOUR_PRISMIC_API_KEY
```

### 2. Configure Project Variables
Common variables for your project live in the following file:
```
config/website.js
```
Values such as the path slugs used throughout your site can be stored here.

### 3. Configure Basic Content
In order for the project to successfully build you'll need to configure your prismic to include:

- A Content Type called **Home**, containing the following fields:
```
{
  "Main" : {
    "page_name" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Page Name",
        "placeholder" : "Enter page name"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "Slug",
        "placeholder" : "Enter slug"
      }
    }
  },
  "SEO" : {
    "meta_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Meta Title",
        "placeholder" : "Enter meta title"
      }
    },
    "meta_description" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "paragraph",
        "label" : "Meta Description",
        "placeholder" : "Enter meta description"
      }
    },
    "open_graph_image" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 1200,
          "height" : 630
        },
        "thumbnails" : [ ],
        "label" : "Open Graph Image"
      }
    }
  }
}
```

- A Content Type called **Settings**, containing:
```
{
  "Main" : {
    "settings_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Settings Title",
        "placeholder" : "Settings title"
      }
    },
    "email" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "paragraph",
        "label" : "Email",
        "placeholder" : "hello@littleandbig.com.au"
      }
    },
    "address" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "paragraph",
        "label" : "Address",
        "placeholder" : "1/45 The Corso, Manly NSW 2095"
      }
    },
    "social_links" : {
      "type" : "Group",
      "config" : {
        "fields" : {
          "type" : {
            "type" : "Select",
            "config" : {
              "options" : [ "Twitter", "Facebook", "Instagram" ],
              "label" : "Type",
              "placeholder" : "Select social media type"
            }
          },
          "link" : {
            "type" : "Link",
            "config" : {
              "allowTargetBlank" : true,
              "label" : "link",
              "placeholder" : "Enter social media URL"
            }
          }
        },
        "label" : "Social Links"
      }
    }
  },
  "Navigation" : {
    "primary_menu" : {
      "type" : "Group",
      "config" : {
        "fields" : {
          "title" : {
            "type" : "StructuredText",
            "config" : {
              "single" : "heading3",
              "label" : "Label",
              "placeholder" : "Label used in the menu for the link"
            }
          },
          "page_link" : {
            "type" : "Link",
            "config" : {
              "label" : "Page Link",
              "placeholder" : "Page that the link leads to"
            }
          }
        },
        "label" : "Primary Menu"
      }
    }
  }
}
```

- A Content Type called **Post**, containing:
```
{
  "Main" : {
    "page_name" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Page Name",
        "placeholder" : "Enter page name"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "Slug",
        "placeholder" : "Enter slug"
      }
    },
    "category" : {
      "type" : "Select",
      "config" : {
        "options" : [ "wedding", "engagement", "family", "personal" ],
        "default_value" : "wedding",
        "label" : "Category"
      }
    },
    "date" : {
      "type" : "Date",
      "config" : {
        "label" : "Publish Date"
      }
    }
  },
  "SEO" : {
    "meta_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Meta Title",
        "placeholder" : "Enter meta title"
      }
    },
    "meta_description" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "paragraph",
        "label" : "Meta Description",
        "placeholder" : "Enter meta description"
      }
    },
    "open_graph_image" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 1200,
          "height" : 630
        },
        "thumbnails" : [ ],
        "label" : "Open Graph Image"
      }
    }
  }
}
```

- A page populated with placeholder data for each of these content types.

Alternatively you can edit the page building configuration in:
```
gatsby-node.js
```
and Queries in:
```
src/pages/index.jsx
src/templates/post.jsx
src/templates/category.jsx
```

### 4. Install NPM Dependancies and Build Project in Dev Mode

```
yarn && yarn dev
```

