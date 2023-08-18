# GitLab CI

## 一、知识拓展

要了解 GitLab-CI 与 GitLab-Runner，我们得先了解持续集成是什么？

- 持续集成是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动化测试)来验证，从而尽快地发现集成错误。许多团队发现这个过程可以大大减少集成的问题，让团队能够更快的开发内聚的软件。 

- 看完这段话，估计还是有点懵。怎么理解呢？我是这样理解的：软件集成是软件开发过程中的一个环节，这个环节的工作一般会包括以下流程：`合并代码---->安装依赖---->编译---->测试---->发布`。软件集成的工作一般会比较细碎繁琐，为了不影响开发效率，以前软件集成这个环节一般不会经常进行或者只会等到项目后期再进行。但是有些问题，如果等到后期才发现，解决问题的代价很大，有可能导致项目延期或者失败。因此，为了尽早发现软件集成错误，鼓励团队成员应该经常集成他们的工作，通常每个成员每天应该至少集成一次。这就是所说的持续集成。所以说，持续集成是一种软件开发实践。  

软件集成的工作细碎繁琐，以前是由人工完成的。但是现在鼓励持续集成，那岂不是要累死人，还影响开发效率。所以，应该考虑将软件集成这个工作自动化，这就出现了所谓的持续集成系统。

## 二、GitLab-CI

### 1. 介绍

GitLab-CI 就是一套配合 gitlab 使用的持续集成系统（当然，还有其它的持续集成系统，同样可以配合 gitlab 使用，比如 Jenkins）。而且 gitlab 8.0 以后的版本是默认集成了 GitLab-CI，并且默认启用的。

![gitlab](/public/img/Gitlab.assets/gitlabCI.png)

### 2. 如何使用

- 需要先在仓库根目录创建一个 `gitlab-ci.yml` 的文件，它用来指定持续集成需要运行的环境，以及要执行的脚本。
- 还需要设置一个 `GitLab-Runner`，当有代码push变更的时候，它会自动开始 Pipeline，并在 gitlab 上显示持续集成的结果。

## 三、[GitLab-Runner](https://docs.gitlab.com/runner/)

### 1. 介绍

GitLab-Runner 是配合 GitLab-CI 进行使用的。  
一般地，GitLab 里面的每一个项目都会定义一个属于这个项目的软件集成脚本 `(.gitlab-ci.yml脚本文件)`，用来自动化地完成一些软件集成工作。当这个项目的仓库代码发生变动时，比如有人 push 了代码，GitLab 就会将这个变动通知 GitLab-CI。这时 GitLab-CI 会找出与这个项目相关联的 Runner，并通知这些 Runner 把代码更新到本地并执行预定义好的执行脚本。所以，GitLab-Runner就是一个用来执行软件集成脚本的东西 `(.gitlab-ci.yml脚本文件)`。  
你可以想象一下：Runner 就像一个个的工人，而 GitLab-CI 就是这些工人的一个管理中心，所有工人都要在 GitLab-CI 里面登记注册，并且表明自己是为哪个工程服务的。当相应的工程发生变化时，GitLab-CI就会通知相应的工人执行软件集成脚本。

### 2. 执行流程

- 本地代码改动
- 变动代码推送到 gitlab 上
- gitlab 将这个变动通知 GitLab-CI
- GitLab-CI 找出这个工程相关联的 GitLab-Runner
- GitLab-Runner 把代码更新到本地
- 根据预设置的条件配置好环境
- 根据预定义的脚本(一般是.gitlab-ci.yml)执行
- 把执行结果通知给 gitlab
- gitlab 显示最终执行的结果

![gitlab2](/public/img/Gitlab.assets/gitlab2.webp)

### [3. Runner 类型](https://docs.gitlab.com/ee/ci/runners/runners_scope.html)

#### Shared Runners

所有的组和项目都能够使用，但是只有系统管理员能够创建。通过 `项目 -> Setting -> CI/CD`，点击 `Runner` 右侧的 `expend` 按钮，并且点击 `Show runner installation instructions`。

#### Group Runners

可以查看和管理在一个组以及这个组中的子组和项目中所有的 Runners。也可以在你自己管理的 gitlab 中进行上面的操作，但是在你在这个组中的觉得必须是最大的。

- 安装 GitLab-Runner。
- 进入你想要 Runner 工作的组。
- 在左菜单栏选择 `CI/CD -> Runners`。
- 复制 `URL` 和 `token`。
- 注册 Runner。

#### Specific Runners

适用于具体的某一个项目。

> 前提条件：你必须是这个项目的维护者。  
> 警告：Specific Runner 不能够适用于通过 fork 的项目，因为他不会自动的进行 Runner。

- 安装 GitLab-Runner。
- 选择你要使用 Runner 的项目。
- 在做侧边栏，选择 `Setting -> CI/CD` 。
- 在 `Runner` 右侧点击 `Expand`。
- 在 `Specific Runner` 选项区域，复制 `URL` 和 `token`。
- 注册 Runner，注册完成后这个项目就可以使用这个 Runner 了。

### 4. Runner 安装与配置

#### 下载系统对应的 Runner

``` shell
# Linux x86-64
sudo wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

# Linux x86
sudo wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-386

# Linux arm
sudo wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-arm
```

#### 给 Runner 添加执行权限

``` shell
sudo chmod +x /usr/local/bin/gitlab-runner
```

#### 创建一个用户

``` shell
sudo useradd --comment GitLab Runner --create-home gitlab-runner --shell /bin/bash
```

#### 安装并启动服务

``` shell
# 安装
gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner

# 启动
gitlab-runner start
```

#### 注册 Runner

``` shell
Enter the GitLab instance URL (for example, https://gitlab.com/):
# 输入服务器GitLab的地址
Enter the registration token:
# 输入项目下的token
Enter a description for the runner:
# 输入项目的描述
Enter tags for the runner (comma-separated):
# 输入项目的tags（在.gitlab-ci.yml上需要用到）
Enter optional maintenance note for the runner:
# 输入注意事项
Enter an executor: docker, docker-ssh, parallels, ssh, virtualbox, docker+machine, custom, shell, docker-ssh+machine, kubernetes:
# 选择以什么方式运行(咱们用shell)
```

运行完之后就会出现 `Runner registered successfully...`，  
并且在 gitlab 上打开所对应的项目的 Runner 界面，就会出现已经注册了的信息，如下图。

![config](/public/img/Gitlab.assets/config.jpg)

*`注：` 绿的小圆点就表示已经是激活成功了，如果注册的信息是黑色的感叹号，那就需要进行激活。可以执行下面的命令：*

``` shell
gitlab-runner verify
gitlab-runner restart
```

## 四、运行机制

- 通过在项目根目录下配置 `.gitlab-ci.yml` 文件，可以控制 CI 流程的不同阶段；例如 install/检查/编译/部署服务器，gitlab 平台会扫描 .gitlab-ci.yml 文件，并据此处理 CI 流程。
- CI 流程在每次团队成员 push/merge 后之后触发。每当你 push/merge 一次，GitLab-CI 都会检查项目下有没有 .gitlab-ci.yml 文件；如果有，它会执行你在里面编写的脚本，并完整地走一遍从 `intall =>（eslint检查=>）编译 =>部署服务器` 流程。
- GitLab-CI 提供了指定 CI 运行平台的机制，它提供了一个叫 GitLab-Runner 的软件，只要在对应的平台(机器或 docker)上下载并运行这个命令行软件，并输入从 gitlab 交互界面获取的 token，就可以把当前机器和对应的 GitLab-CI 流程绑定，即每次跑 CI 都在这个平台上进行。
- GitLab-CI 的所有流程都是可视化的，每个流程节点的状态可以在 gitlab 的交互界面上看到，包括执行成功或失败。因为它的执行看上去就和多节管道一样，所以我们通常用 `pipeLine` 来称呼它。
- 不同 push/merge 所触发的 CI 流程不会互相影响。

## 五、设计理念

### 1. Pipeline & Job

Pipeline 是 gitlab 根据项目的 .gitlab-ci.yml 文件执行的流程，它由许多个任务节点组成, 而这些 Pipeline 上的每一个任务节点，都是一个独立的Job。  
每个 Job 都会配置一个 stage 属性，来表示这个 Job 所处的阶段。

### 2. YML文件的基本语法规则

CI 流程的运行控制，决定于项目根目录下编写的配置文件 `.gitlab-ci.yml`，所以，我们需要掌握 YML 的基本语法规则。

#### 简单的YML文件配置

```yaml
install-job: # 注释
  tags:
    - sss
  stage: install
  script:
    - npm install
```

*`注：`可以看出：YML通过缩进组织层级，YML里允许通过#符号编写注释*

#### 基本结构上 YML 与 JSON 类似

JSON 是由对象，数组，以及对象和数组的嵌套结构组成的；  
YML 也是由对象，数组，以及对象和数组的嵌套结构组成的。

- YML中的数组写法：

```yaml
# 数组写法
colors:
  - red
  - blue
  - yellow

# 对象写法
people:
  name: zs
  age: 14

# 数组和对象之间的嵌套
a:
  b:
    - d
  c: e
```

- 相当于JSON中的

```json
// 数组写法
{
  "color":["red", "blue", "yellow"]
}

// 对象写法
{"people": {"name": "zs", "age": 14}}

// 数组和对象之间的嵌套
{
  "a": {
    "b": ["d"],
    "c": "e",
  }
}
```

### YML 文件中的配置关键字

在了解了YML文件的语法格式后，接下来需要了解的就是 GitLab-CI 独特的配置关键字，这些关键字将在 .gitlab-ci.yml 中使用，并用来控制一个 Pipeline 具体的运作过程。

#### 常用配置关键字

`stages` `stage` `script` `tags`

#### stages

stages 定义在 YML 文件的最外层，它的值是一个数组，用于定义一个 Pipeline 不同的流程节点。

- 例如定义如下

```yaml
stages:
  - install_deps
  - build_prod
  - deploy_prod
```

- 则在 gitlab 交互界面中能够看到如下展示

![stages](/public/img/Gitlab.assets/stages.jpg)

#### stage

上面说过：Job 是 Pipeline 的任务节点，它构成了 Pipeline 的基本单元。

```yaml
install_deps_job:
  stage: install_deps
  script:
    - echo '模拟安装构建依赖阶段'
  tags:
    - build_test
```

- stage 是一个字符串，且是 stages 数组的一个子项，表示的是当前的 Pipeline 节点。当前 stage 的执行情况能在交互面板上展现：`正在执行是蓝色` `尚未执行是灰色` `执行成功是绿色` `执行失败是红色`。

![stage](/public/img/Gitlab.assets/stage1.jpg)
![stage](/public/img/Gitlab.assets/stage2.jpg)

- script 是当前 Pipeline 节点运行的 shell 脚本（以项目根目录为上下文执行）。这个script 是我们控制 CI 流程的核心，我们所有的工作：从安装，编译到部署都是通过 script 中定义的 shell 脚本来完成的。如果脚本执行成功，Pipeline 就会进入下一个 Job 节点，如果执行失败那么 Pipeline 就会终止。

- tags 是当前 Job 的标记，这个tags关键字是很重要，因为 gitlab 的 Runner 会通过 tags 去判断能否执行当前这个 Job。

例如：我们在 gitlab 的面板中能看到当前激活的 Runner 的信息：`Gitlab项目首页=> setting => CI/CD => Runners => Expand`。

![tags](/public/img/Gitlab.assets/tags.jpg)

*`注：`上面的这个 `build_test` 就是当前 Runner 的 tags。这意味着，这个 Runner 只会执行 tag 为 build_test 的 Job；如果一个 Job 没有 tag 或者 tag 不是 build_test，那么即使这个 Runner 是激活且空闲的，也不会去执行。*

## 六、自动化部署优点

### 1. 提高前端的开发效率和开发测试之间的协调效率

- 如果按照传统的流程，在项目上线前的测试阶段，前端同学修复 bug 之后，要手动把代码部署之后。才能通知测试同学在测试环境进行测试。这会造成几个问题：本身手动部署服务的工作是比较繁琐的，占用了开发时间。同时开发-测试之间的环节的耦合问题，则会增加团队沟通成本。

- 通过GitLab-CI，前端开发在提交代码之后就不用管了，CI 流程会自动部署到测试或集成环境的服务器。很大程度上节约了开发的时间。同时，因为开发和测试人员可以共用 gitlab 里的 Pipeline 界面, 测试同学能够随时把握代码部署的情况，同时还可以通过交互界面手动启动 Pipeline，自己去部署测试，从而节约和开发之间的沟通时间。

### 2. 从更细的粒度把握代码质量

- 我们可以把 eslint 或其他的代码检查加到 Pipeline 流程中，每当团队成员提交和合并一次，Pipeline 都会触发一次并对代码做一次全面检测，这样就从一个更细的粒度上控制代码质量了。
