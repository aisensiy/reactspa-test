var restify = require('restify');

var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS({
  origins: ['http://localhost:8080', 'http://10.29.3.180:8080'],   // defaults to ['*']
  credentials: true                 // defaults to false
}));

var current_user;

var users = [
  {
    "qualifications": [],
    "role": "PROJECT_MANAGER",
    "primary_role": "PM",
    "name": "Wang",
    "real_name": "Wang Xiaoming",
    "id": 22222,
    "department": null
  },
  {
    "qualifications": [],
    "role": "EMPLOYEE",
    "primary_role": "Dev",
    "name": "shanchuan",
    "real_name": "Xu Shanchuan",
    "id": 100,
    "department": null
  }
];

var solutions = [
  {
    "name": "api",
    "description": "description for data api",
    "created_at": "2015-12-16 15:05:47.0",
    "id": 1,
    "uri": "/solutions/1"
  },
  {
    "name": "spa",
    "description": "description for single page app",
    "created_at": "2015-12-16 15:05:47.0",
    "id": 2,
    "uri": "/solutions/2"
  }
];

var projects = [
  {
    "capabilities_uri": "/projects/100/capabilities",
    "name": "ketsu",
    "id": 100,
    "services": [
      {
        "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
        "name": "Java"
      },
      {
        "image_url": "https://jersey.java.net/images/jersey_logo.png",
        "name": "Jersey"
      },
      {
        "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
        "name": "MySQL"
      },
      {
        "image_url": "http://img.stackshare.io/service/1020/OYIaJ1KK.png",
        "name": "React"
      },
      {
        "image_url": "http://img.stackshare.io/service/1682/2105791.png ",
        "name": "Webpack"
      },
      {
        "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
        "name": "Java"
      },
      {
        "image_url": "https://jersey.java.net/images/jersey_logo.png",
        "name": "Jersey"
      },
      {
        "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
        "name": "MySQL"
      }
    ],
    "uri": "/projects/100",
    "account": "ThoughtWorks"
  },
  {
    "capabilities_uri": "/projects/101/capabilities",
    "name": "P2P",
    "id": 101,
    "services": [],
    "uri": "/projects/101",
    "account": "ThoughtWorks"
  }
];

var capabilities = [
  {
    "stack": {
      "name": "javajersey",
      "description": "jersey 2.0 and mysql with innodb and mybatis",
      "id": 1,
      "services": [
        {
          "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
          "name": "Java",
          "uri": "/services/10"
        },
        {
          "image_url": "https://jersey.java.net/images/jersey_logo.png",
          "name": "Jersey",
          "uri": "/services/11"
        },
        {
          "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
          "name": "MySQL",
          "uri": "/services/12"
        }
      ],
      "uri": "/stacks/1"
    },
    "solution": {
      "name": "api",
      "description": "description for data api",
      "created_at": "2015-12-16 15:05:47.0",
      "id": 1,
      "uri": "/solutions/1"
    },
    "deprecated_at": null,
    "created_at": 1450249547000,
    "id": 1,
    "uri": "/projects/100/capabilities/1"
  },
  {
    "stack": {
      "name": "react",
      "description": "stack of react with redux",
      "id": 2,
      "services": [
        {
          "image_url": "http://img.stackshare.io/service/1020/OYIaJ1KK.png",
          "name": "React",
          "uri": "/services/13"
        },
        {
          "image_url": "http://img.stackshare.io/service/1682/2105791.png ",
          "name": "Webpack",
          "uri": "/services/14"
        }
      ],
      "uri": "/stacks/2"
    },
    "solution": {
      "name": "spa",
      "description": "description for single page app",
      "created_at": "2015-12-16 15:05:47.0",
      "id": 2,
      "uri": "/solutions/2"
    },
    "deprecated_at": null,
    "created_at": 1450249547000,
    "id": 2,
    "uri": "/projects/100/capabilities/2"
  }
];

var stacks = [
  {
    "name": "javajersey",
    "description": "jersey 2.0 and mysql with innodb and mybatis",
    "id": 1,
    "services": [
      {
        "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
        "name": "Java",
        "uri": "/services/10"
      },
      {
        "image_url": "https://jersey.java.net/images/jersey_logo.png",
        "name": "Jersey",
        "uri": "/services/11"
      },
      {
        "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
        "name": "MySQL",
        "uri": "/services/12"
      }
    ],
    "uri": "/stacks/1"
  },
  {
    "name": "react",
    "description": "stack of react with redux",
    "id": 2,
    "services": [
      {
        "image_url": "http://img.stackshare.io/service/1020/OYIaJ1KK.png",
        "name": "React",
        "uri": "/services/13"
      },
      {
        "image_url": "http://img.stackshare.io/service/1682/2105791.png ",
        "name": "Webpack",
        "uri": "/services/14"
      }
    ],
    "uri": "/stacks/2"
  }
];

var evaluations = [
  {
    "stack": {
      "name": "javajersey",
      "description": "jersey 2.0 and mysql with innodb and mybatis",
      "id": 1,
      "services": [
        {
          "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
          "name": "Java",
          "uri": "/services/10"
        },
        {
          "image_url": "https://jersey.java.net/images/jersey_logo.png",
          "name": "Jersey",
          "uri": "/services/11"
        },
        {
          "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
          "name": "MySQL",
          "uri": "/services/12"
        }
      ],
      "uri": "/stacks/1"
    },
    "solution": {
      "name": "api",
      "description": "description for data api",
      "created_at": "2015-12-16 15:05:47.0",
      "id": 1,
      "uri": "/solutions/1"
    },
    "project_id": 100,
    "capability_id": 1,
    "instruction": {
      "cookie": "EXAM_SESSION_ID=91d90003-fd07-4a6f-a9e0-8ea81efa3286",
      "instructionUri": "/projects/100/users/100/evaluations/2/instructions"
    },
    "created_at": 1450255488000,
    "id": 2,
    "projectName": "ketsu",
    "uri": "/users/100/evaluations/2",
    "user": {
      "name": "shanchuan",
      "id": 100,
      "uri": "/users/100"
    }
  }
];

var qualifications = [
  {
    "score": 0,
    "capability": {
      "id": 1
    },
    "solution_name": "api",
    "stack": {
      "name": "javajersey",
      "description": "jersey 2.0 and mysql with innodb and mybatis",
      "id": 1,
      "services": [
        {
          "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
          "name": "Java",
          "uri": "/services/10"
        },
        {
          "image_url": "https://jersey.java.net/images/jersey_logo.png",
          "name": "Jersey",
          "uri": "/services/11"
        },
        {
          "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
          "name": "MySQL",
          "uri": "/services/12"
        }
      ]
    },
    "created_at": 1450249547000,
    "id": 3,
    "project_name": null,
    "uri": "/users/100/qualifications/3",
    "stack_name": "javajersey",
    "user": {
      "name": "shanchuan",
      "id": 100,
      "uri": "/users/100"
    }
  }
];

var project_users = [
  {
    "qualifications": [
      {
        "score": 0,
        "capability": {
          "id": 1
        },
        "solution_name": "api",
        "stack": {
          "name": "javajersey",
          "description": "jersey 2.0 and mysql with innodb and mybatis",
          "id": 1,
          "services": [
            {
              "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
              "name": "Java",
              "uri": "/services/10"
            },
            {
              "image_url": "https://jersey.java.net/images/jersey_logo.png",
              "name": "Jersey",
              "uri": "/services/11"
            },
            {
              "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
              "name": "MySQL",
              "uri": "/services/12"
            }
          ]
        },
        "created_at": 1450249547000,
        "id": 3,
        "project_name": null,
        "uri": "/users/100/qualifications/3",
        "stack_name": "javajersey"
      }
    ],
    "evaluations": [
      {
        "stack": {
          "name": "javajersey",
          "description": "jersey 2.0 and mysql with innodb and mybatis",
          "id": 1,
          "services": [
            {
              "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
              "name": "Java",
              "uri": "/services/10"
            },
            {
              "image_url": "https://jersey.java.net/images/jersey_logo.png",
              "name": "Jersey",
              "uri": "/services/11"
            },
            {
              "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
              "name": "MySQL",
              "uri": "/services/12"
            }
          ],
          "uri": "/stacks/1"
        },
        "solution": {
          "name": "api",
          "description": "description for data api",
          "created_at": "2015-12-16 15:05:47.0",
          "id": 1,
          "uri": "/solutions/1"
        },
        "project_id": 100,
        "capability_id": 1,
        "created_at": 1450255488000,
        "id": 2,
        "projectName": "ketsu",
        "uri": "/users/100/evaluations/2"
      }
    ],
    "name": "shanchuan",
    "id": 100,
    "uri": "/users/100"
  },
  {
    "qualifications": [
      {
        "score": 0,
        "capability": {
          "id": 2
        },
        "solution_name": "spa",
        "stack": {
          "name": "react",
          "description": "stack of react with redux",
          "id": 2,
          "services": [
            {
              "image_url": "http://img.stackshare.io/service/1020/OYIaJ1KK.png",
              "name": "React",
              "uri": "/services/13"
            },
            {
              "image_url": "http://img.stackshare.io/service/1682/2105791.png ",
              "name": "Webpack",
              "uri": "/services/14"
            }
          ]
        },
        "created_at": 1450249547000,
        "id": 4,
        "project_name": null,
        "uri": "/users/101/qualifications/4",
        "stack_name": "react"
      }
    ],
    "evaluations": [],
    "name": "xiaoming",
    "id": 101,
    "uri": "/users/101"
  },
  {
    "qualifications": [
      {
        "score": 0,
        "capability": {
          "id": 1
        },
        "solution_name": "api",
        "stack": {
          "name": "javajersey",
          "description": "jersey 2.0 and mysql with innodb and mybatis",
          "id": 1,
          "services": [
            {
              "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
              "name": "Java",
              "uri": "/services/10"
            },
            {
              "image_url": "https://jersey.java.net/images/jersey_logo.png",
              "name": "Jersey",
              "uri": "/services/11"
            },
            {
              "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
              "name": "MySQL",
              "uri": "/services/12"
            }
          ]
        },
        "created_at": 1450249547000,
        "id": 1,
        "project_name": null,
        "uri": "/users/22222/qualifications/1",
        "stack_name": "javajersey"
      },
      {
        "score": 0,
        "capability": {
          "id": 2
        },
        "solution_name": "spa",
        "stack": {
          "name": "react",
          "description": "stack of react with redux",
          "id": 2,
          "services": [
            {
              "image_url": "http://img.stackshare.io/service/1020/OYIaJ1KK.png",
              "name": "React",
              "uri": "/services/13"
            },
            {
              "image_url": "http://img.stackshare.io/service/1682/2105791.png ",
              "name": "Webpack",
              "uri": "/services/14"
            }
          ]
        },
        "created_at": 1450249547000,
        "id": 2,
        "project_name": null,
        "uri": "/users/22222/qualifications/2",
        "stack_name": "react"
      }
    ],
    "evaluations": [
      {
        "result": {
          "score": 5600,
          "id": 1,
          "status": "PASSED"
        },
        "stack": {
          "name": "javajersey",
          "description": "jersey 2.0 and mysql with innodb and mybatis",
          "id": 1,
          "services": [
            {
              "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
              "name": "Java",
              "uri": "/services/10"
            },
            {
              "image_url": "https://jersey.java.net/images/jersey_logo.png",
              "name": "Jersey",
              "uri": "/services/11"
            },
            {
              "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
              "name": "MySQL",
              "uri": "/services/12"
            }
          ],
          "uri": "/stacks/1"
        },
        "solution": {
          "name": "api",
          "description": "description for data api",
          "created_at": "2015-12-16 15:05:47.0",
          "id": 1,
          "uri": "/solutions/1"
        },
        "project_id": 100,
        "capability_id": 1,
        "created_at": 1450249547000,
        "id": 1,
        "projectName": "ketsu",
        "uri": "/users/22222/evaluations/1",
        "status": "PASSED"
      }
    ],
    "name": "Wang",
    "id": 22222,
    "uri": "/users/22222"
  }
];

var assignments = [
  {
    "starts_at": "2015-12-12",
    "user_id": 100,
    "name": "ketsu",
    "id": 100,
    "ends_at": "2016-12-12",
    "account": "ThoughtWorks"
  },
  {
    "starts_at": "2015-12-12",
    "user_id": 100,
    "name": "P2P",
    "id": 101,
    "ends_at": "2016-12-12",
    "account": "ThoughtWorks"
  }
];



server.post('/authentication', function (req, res) {
  var filted_users = users.filter(function (user, index) {
    return user.name == req.params.user_name;
  });

  if (filted_users.length) {
    current_user = filted_users[0];
    res.send(200);
  } else {
    res.send(400);
  }
});

server.del('/authentication', function (req, res) {
  current_user = null;
  res.send(200);
});

server.get('/users/current', function (req, res) {
  if (current_user) {
    res.send(200, current_user);
  } else {
    res.send(401);
  }
});

server.get('/users/:user_id', function (req, res) {
  var filted_users = users.filter(function (user) {
    return user.id == req.params.user_id;
  });
  if (filted_users.length) {
    res.send(200, filted_users[0]);
  } else {
    res.send(404);
  }
});

server.get('/users/:user_id/projects', function (req, res) {
  res.send(200, projects);
});

server.get('/users/:user_id/evaluations', function (req, res) {
  res.send(200, evaluations);
});

server.get('/users/:user_id/qualifications', function (req, res) {
  res.send(200, qualifications);
});

server.get('/users/:user_id/assignments', function (req, res) {
  res.send(200, assignments);
});

server.get('/projects/:project_id', function (req, res) {
  var filted_projects = projects.filter(function (project) {
    return project.id == req.params.project_id;
  });
  if (filted_projects.length) {
    res.send(200, filted_projects[0]);
  } else {
    res.send(404);
  }
});

server.get('/projects/:project_id/capabilities', function (req, res) {
  if (req.params.all) {
    res.send(200, capabilities);
  } else {
    res.send(200, capabilities.filter(function (capability) {
      return capability.deprecated_at == null;
    }));
  }
});

server.post('/projects/:project_id/capabilities/:capability_id/deprecated', function (req, res) {
  capabilities.filter(function (capability) {
    return capability.id == req.params.capability_id;
  }).forEach(function (capability) {
    capability.deprecated_at = +new Date();
  });
  res.send(200);
});

server.post('/projects/:project_id/capabilities', function (req, res) {
  capabilities.push({
    "stack": {
      "name": "javajersey",
      "description": "jersey 2.0 and mysql with innodb and mybatis",
      "id": 1,
      "services": [
        {
          "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
          "name": "Java",
          "uri": "/services/10"
        },
        {
          "image_url": "https://jersey.java.net/images/jersey_logo.png",
          "name": "Jersey",
          "uri": "/services/11"
        },
        {
          "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
          "name": "MySQL",
          "uri": "/services/12"
        }
      ],
      "uri": "/stacks/1"
    },
    "solution": {
      "name": "api",
      "description": "description for data api",
      "created_at": "2015-12-16 15:05:47.0",
      "id": 1,
      "uri": "/solutions/1"
    },
    "deprecated_at": null,
    "created_at": 1450255363000,
    "id": +new Date % 100,
    "uri": "/projects/100/capabilities/3"
  });
  res.send(201);
});

server.get('/projects/:project_id/users', function (req, res) {
  res.send(200, project_users);
});

server.post('/projects/:project_id/users/:user_id/evaluations', function (req, res) {
  var evaluation = {
    "stack": {
      "name": "javajersey",
      "description": "jersey 2.0 and mysql with innodb and mybatis",
      "id": 1,
      "services": [
        {
          "image_url": "http://img.stackshare.io/service/995/K85ZWV2F.png",
          "name": "Java",
          "uri": "/services/10"
        },
        {
          "image_url": "https://jersey.java.net/images/jersey_logo.png",
          "name": "Jersey",
          "uri": "/services/11"
        },
        {
          "image_url": "http://img.stackshare.io/service/1025/logo-mysql-170x170.png",
          "name": "MySQL",
          "uri": "/services/12"
        }
      ],
      "uri": "/stacks/1"
    },
    "solution": {
      "name": "api",
      "description": "description for data api",
      "created_at": "2015-12-16 15:05:47.0",
      "id": 1,
      "uri": "/solutions/1"
    },
    "project_id": 100,
    "capability_id": req.params.capability_id,
    "instruction": {
      "cookie": "EXAM_SESSION_ID=91d90003-fd07-4a6f-a9e0-8ea81efa3286",
      "instructionUri": "/projects/100/users/100/evaluations/2/instructions"
    },
    "created_at": 1450255488000,
    "id": 2,
    "projectName": "ketsu",
    "uri": "/users/100/evaluations/2",
    "user": {
      "name": "shanchuan",
      "id": 100,
      "uri": "/users/100"
    }
  };
  var filted_users = project_users.filter(function (user) {
    return user.id == req.params.user_id;
  }).forEach(function (user) {
    user.evaluations.push(evaluation);
    evaluations.push(evaluation);
  });

  res.send(201);
});

server.get('/solutions', function(req, res) {
  res.send(200, solutions);
});

server.get('/stacks', function(req, res) {
  res.send(200, stacks);
});

server.listen(8888, function() {
  console.log('%s listening at %s', server.name, server.url);
});