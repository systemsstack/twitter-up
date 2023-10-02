const ROUTES = [
    {
        url: '/ui/v1/auth/**',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8001",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8001'
            },
            cookieDomainRewrite: '',
            pathRewrite: {
            },
        }
    },
    {
        url: '/ui/v1/user/**',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8001",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8001'
            },
            cookieDomainRewrite: '',
            pathRewrite: {
            },
        }
    },
    {
        url: '/api/v1/auth/**',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8001",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8001'
            },
            pathRewrite: {
            },
        }
    },
    {
        url: '/api/v1/user/**',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8001",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8001'
            },
            pathRewrite: {
            },
        }
    },
    {
        url: '/ui/v1/tweets/**',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8002",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8002'
            },
            pathRewrite: {
            },
        }
    },
    {
        url: '/api/v1/tweets/**',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8002",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8002'
            },
            pathRewrite: {
            },
        }
    },
    {
        url: '/ui/v1/tweets',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8002",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8002'
            },
            pathRewrite: {
            },
        }
    },
    {
        url: '/api/v1/tweets',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8002",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8002'
            },
            pathRewrite: {
            },
        }
    },
    {
        url: '/api/v1/tags/**',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8004",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8004'
            },
        }
    },
    {
        url: '/ui/v1/tags/search/**',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8004",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8004'
            },
        }
    },
    {
        url: '/api/v1/tags',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8004",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8004'
            },
        }
    },
    {
        url: '/ui/v1/tags',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8004",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8004'
            },
        }
    },
    {
        url: '/websocket/**',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:8022",
            changeOrigin: true,
            headers: {
                Origin: 'http://localhost:8001'
            },
        }
    },
]

exports.ROUTES = ROUTES;