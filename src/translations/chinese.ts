// SPDX-License-Identifier: GPL-3.0
//
// Copyright (c) 2024 LINBIT
//
// Author: Liang Li <liang.li@linbit.com>

const zh = {
  common: {
    disconnected: '未连接',
    connected: '已连接',
    search: '搜索',
    property: '属性',
    add: '添加',
    view: '查看',
    edit: '编辑',
    delete: '删除',
    migrate: '迁移',
    snapshot: '快照',
    lost: '强制删除',
    nodes: '节点',
    resources: '资源',
    volumes: '卷',
    error_reports: '错误报告',
    disk_creation_records: '硬盘创建记录',
    resource_group: '资源组',
    submit: '提交',
    cancel: '取消',
    reset: '重置',
    name: '名称',
    action: '操作',
    controller: '控制节点',
    add_property: '添加属性',
    controller_properties: '控制节点属性',
    back: '返回',
    activate: '激活',
    detail: '详情',
    storage_pool: '存储池',
    node: '节点',
    spawn: '生成',
    spawn_on_create: '创建时生成',
    port: '端口',
    size: '大小',
    state: '状态',
    place_count: '放置数量',
    diskless_on_remaining: '在剩余节点上无盘',
    replication_mode: '复制模式',
    async: '异步（A）',
    semi_sync: '半同步（B）',
    sync: '同步（C）',
    resource_definition: '资源定义',
    volume_number: '卷编号',
    created_on: '创建时间',
    usage_status: '使用状态',
    connection_status: '连接状态',
    create: '创建',
    add_column: '添加列',
    reset_column: '重置列',
    column_data_index: '列数据源',
    column_title: '列标题',
    resource_definition_name: '资源定义名称',
    allocate_method: '分配方法',
    auto: '自动',
    manual: '手动',
    device_path: '设备路径',
    resource: '资源',
    upload: '上传',
    save: '保存',
    settings: '设置',
    status: '状态',
    confirm: '确认',
    stop: '停止',
    start: '启动',
    logout: '退出',
    user: '用户',
    login: '登录',
    username: '用户名',
    password: '密码',
    logs: '日志',
    log_detail: '日志详情',
    clear_all_logs: '清除所有日志',
    mark_all_as_read: '全部标记为已读',
    back_to_logs: '返回日志列表',
    mark_as_read: '标记为已读',
    primary: '主要',
    adjust: '调整',
    clone: '克隆',
    external_name: '外部名称',
    use_zfs_clone: '使用 ZFS 克隆',
    toggle: '切换',
    volume_definition: '卷定义',
    layers: '存储层',
  },
  menu: {
    dashboard: '概览',
    support: '支持',
    inventory: '资源库',
    node: '节点',
    controller: '控制节点',
    storage_pools: '存储池',
    node_ip_addrs: '网络节点',
    error_reports: '错误日志',
    software_defined: '软件定义',
    resource_overview: '资源概览',
    resource_groups: '资源组',
    resource_definitions: '资源定义',
    resources: '资源',
    volumes: '卷',
    remotes: '远端',
    linstor: 'LINSTOR',
    settings: '设置',
    volume_definitions: '卷定义',
    snapshot: '快照',
    gateway: 'Gateway',
    iscsi: 'iSCSI',
    nfs: 'NFS',
    'nvme-of': 'NVMe-oF',
    grafana: 'Grafana',
    users: '用户',
  },
  node: {
    node_list: '节点列表',
    node_name: '名称',
    default_ip: '默认地址',
    default_port: '默认端口',
    node_type: '类型',
    node_status: '状态',
    view_node: '详情',
    edit_node: '编辑',
    add_node: '添加',
    delete_node: '删除',
    lost_node: '强删',
    node_detail: '节点详情',
    create_node: '创建节点',
  },
  node_detail: {
    title: '节点详情',
    node_name: '节点名称',
    node_type: '节点类型',
    node_status: '节点状态',
    resource_layers: '资源层',
    storage_providers: '存储提供者',
    network_interfaces: '网络接口',
    storage_pool_info: '存储池信息',
    resource_info: '资源信息',
    add_network_interface: '添加网络接口',
  },
  ip_address: {
    list: 'IP 地址列表',
    node: '节点',
    ip_address: 'IP 地址',
    tcp_port: 'TCP 端口',
    alias: '别名',
    is_management_network: '是否管理网络',
  },
  storage_pool: {
    list: '存储池',
    name: '名称',
    node_name: '节点名称',
    provider_kind: '类型',
    free_capacity: '可用容量',
    total_capacity: '总容量',
    add: '添加',
    view: '详情',
    edit: '编辑',
    delete: '删除',
    supports_snapshots: '支持快照',
    network_preference: '优先网络',
    disk: '硬盘',
    show_default: '显示默认',
    add_title: '添加存储池',
    add_description:
      '存储池标识了 LINSTOR 存储卷消耗的物理支持存储。您可以将存储池分配给其他 LINSTOR 对象，例如 LINSTOR 资源、资源定义或资源组。从这些对象创建的 LINSTOR 存储卷将从分配给对象的存储池中消耗物理存储。',
    new_device: '新设备',
    new_device_description: '创建存储池时使用新设备，请确保设备为空。',
    existing_device: '现有设备',
    existing_device_description: '要使用现有设备，请先使用 LVM CLI 命令创建卷组和逻辑卷。',
    storage_pool_name: '存储池名称',
    node: '节点',
    type: '类型',
    lvm_pool: 'Volume Group/Thin Pool',
    zfs_pool: 'ZFS Pool 名称',
    zfs_toast: '在创建 ZFS 存储池之前，您需要在节点上安装和配置 ZFS。',
    multiple_nodes: '多节点',
    device_path: '设备路径',
    device_path_tooltip: '选择将支持存储池的物理设备的路径。设备应为空。',
    advanced_options: '高级选项',
    lvm_pool_name: 'LVM Pool 名称',
    sed: 'SED 启用',
    vdo: 'VDO 启用',
  },
  resource_group: {
    list: '资源组列表',
    name: '资源组名称',
    place_count: '放置数量',
    storage_pools: '存储池',
    replication: '复制模式',
    auto: '自动',
    async: '异步（A）',
    semi_sync: '半同步（B）',
    sync: '同步（C）',
    diskless: '在剩余节点上无盘',
    description: '描述',
    create: '创建资源组',
    storage_providers: '存储提供者',
    linstor_layers: 'LINSTOR 层',
    drbd_protocol: 'DRBD 协议',
    spawn_on_create: '创建时生成',
    storage_pool: '存储池',
    show_advanced: '显示高级设置',
    hide_advanced: '隐藏高级设置',
    replicas_on_same: '在相同节点上的副本',
    do_not_place_with: '不要放置在',
    replicas_on_different: '在不同节点上的副本',
    do_not_place_with_regex: '不要在正则表达式匹配的节点上放置',
  },
  resource_definition: {
    name: '名称',
    list: '资源定义列表',
    resource_group_name: '资源组名称',
    size: '大小',
    port: '端口',
    state: '状态',
    create: '创建资源定义',
    edit: '编辑资源定义',
  },
  volume_definition: {
    name: '名称',
    list: '卷定义列表',
    resource_group_name: '资源组名称',
    create: '创建卷定义',
  },
  volume: {
    list: '卷列表',
    device_name: '设备名称',
    in_use: '使用中',
    allocated_size: '已分配大小',
    reserved_size: '保留大小',
    resource_volume: '资源/卷编号',
  },
  resource: {
    list: '资源列表',
    create: '创建资源',
    overview: '资源概览',
    edit: '编辑资源',
    create_snapshot: '创建快照',
    migrate: '迁移资源',
    resource: '资源',
    from: '所在的节点',
    to: '迁移至的节点',
    connection_status: '连接状态',
    add_disk: '添加硬盘',
    remove_disk: '移除硬盘',
  },
  error_report: {
    id: 'ID',
    time: '时间',
    module: '模块',
    content: '内容',
    detail_title: '错误日志详情',
    list_title: '错误日志列表',
    download_sos: '下载 SOS 报告',
    time_range: '时间范围',
  },
  dashboard: {
    title: '概览',
  },
  translation: {
    title: '中文',
    Dashboard: '概览',
  },
  users: {
    description: '你可以在这里查启用或禁用用户认证。',
    authentication: '用户认证',
    no_user: '没有用户',
    add_a_user: '添加用户',
    reset_password: '重置密码',
    delete_user: '删除用户',
    new_password: '新密码',
    confirm_password: '确认密码',
    change_password: '修改密码',
    username: '用户名',
    password: '密码',
    add: '添加用户',
    current_password: '当前密码',
    password_changed: '密码修改成功',
  },
  remote: {
    list: '远端列表',
    name: '名称',
    type: '类型',
    Info: '信息',
    backups: '备份',
    endpoint: '路径',
    bucket: '桶',
    region: '区域',
    access_key: '访问密钥',
    secret_key: '密钥',
    url: '链接地址',
    use_path_style: '使用路径样式',
  },
  snapshot: {
    list: '快照列表',
    resource_name: '资源名称',
    node_names: '节点名称',
    snapshot_name: '快照名称',
    volumes: '卷',
    create: '创建快照',
    nodes: '节点',
  },
  settings: {
    title: '设置',
    general: '通用',
    custom_logo: '自定义 Logo',
    custom_logo_description:
      // You can select either a local SVG file or a remote URL. The URL can point to any image type.
      '您可以选择本地 SVG 文件或远程 URL。URL 可以指向任何图像类型。',
    logo: 'Logo',
    url: 'URL',
    gateway: 'Gateway',
    linstor_gateway: 'LINSTOR Gateway',
    linstor_gateway_description:
      // 'Manages Highly-Available iSCSI targets and NFS exports via LINSTOR. Installing linstor-gateway is a prerequisite for enabling this feature. After enabling this feature, the Gateway entry will be displayed in the left-side menu.',
      '通过 LINSTOR 管理高可用 iSCSI 目标和 NFS 导出。启用此功能前，需要安装 linstor-gateway。启用此功能后，左侧菜单中将显示 Gateway 选项。',
    passphrase: '密语',
    gateway_mode: 'Gateway 模式',
    gateway_mode_description:
      //'Installing linstor-gateway is a prerequisite for enabling this feature. And ensure that the endpoint is correctly configured to allow communication between the LINSTOR Gateway and the LINSTOR Server.',
      '启用此功能前，需要安装 linstor-gateway。确保正确配置端点以允许 LINSTOR Gateway 和 LINSTOR 服务器之间的通信。',
    custom_host: '自定义主机',
    custom_host_description:
      '启用自定义主机后，您需要在下面的“自定义 API”部分输入 LINSTOR Gateway API 端点。默认值是 LINSTOR 服务器 IP + 8080，如 http://192.168.1.1:8080/。如果使用自定义端口或不同的 IP，请相应调整端点。',
    custom_api: '自定义 API',
    grafana: 'Grafana',
    grafana_description:
      // 'Here you can configure the Grafana Dashboard. Once set up, an entry will be displayed in the left-side menu.',
      '在这里，您可以配置 Grafana 仪表板。设置完成后，左侧菜单中将显示一个选项。',
    grafana_url: 'Grafana URL',
    available: '可用',
    not_available: '不可用',
    create_edit_label: '创建/编辑',
    linstor_passphrase: 'LINSTOR 密语',
    old_passphrase: '旧密语',
    new_passphrase: '新密语',
    confirm_passphrase: '确认密语',
  },
  iscsi: {
    list: 'iSCSI 列表',
    create: 'iSCSI 创建',
    iqn: 'IQN',
    resource_group: '资源组',
    service_ips: '服务 IP',
    on_node: '所在节点',
    linstor_state: 'LINSTOR 状态',
    service_state: '服务状态',
    lun: '逻辑单元号',
    add_volume: '添加卷',
    delete_volume: '删除卷',
    adding_volume: '正在添加卷',
    deleting_volume: '正在删除卷',
    add_service_ip: '添加服务 IP',
  },
  nfs: {
    list: 'NFS 列表',
    create: 'NFS 创建',
    name: '名称',
    on_node: '节点',
    service_ip: '服务 IP',
    export_path: '导出路径',
    linstor_state: 'LINSTOR 状态',
    service_state: '服务状态',
    file_system: '文件系统',
    volumes: '卷',
    allowed_ips: '允许的 IP',
  },
  nvme: {
    list: 'NVMe-oF 列表',
    create: 'NVMe-oF 创建',
    nqn: 'NQN',
    resource_group: '资源组',
    service_ip: '服务 IP',
    on_node: '所在节点',
    linstor_state: 'LINSTOR 状态',
    service_state: '服务状态',
    lun: '逻辑单元号',
    add_volume: '添加卷',
    delete_volume: '删除卷',
    adding_volume: '正在添加卷',
    deleting_volume: '正在删除卷',
    add_service_ip: '添加服务 IP',
  },
  about: {
    linstor_version: 'LINSTOR 版本',
    ui_version: 'UI 版本',
    controller_ip: '控制器绑定 IP',
    controller_active_on: '控制器活动于',
    trademark:
      'LINSTOR-GUI 是自由软件：您可以根据 GNU 通用公共许可证的条款（由自由软件基金会发布的许可证的第 3 版）重新分发或修改它。本程序是基于希望它将是有用的，但没有任何保证；甚至没有适销性或适用于特定目的的暗示保证。有关更多详细信息，请参阅 GNU 通用公共许可证。',
  },
};

export default zh;
