/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v2/iscsi": {
    /** Returns a list of all iSCSI targets created by LINSTOR Gateway */
    get: operations["iscsiList"];
    /** Creates a new iSCSI target */
    post: operations["iscsiCreate"];
  };
  "/api/v2/iscsi/{iqn}": {
    /** Gets the resource config of a single iSCSI target. */
    get: operations["iscsiGet"];
    /** Deletes an iSCSI target, along with all its LUNs */
    delete: operations["iscsiDelete"];
  };
  "/api/v2/iscsi/{iqn}/start": {
    /** Starts an iSCSI target. */
    post: operations["iscsiStart"];
  };
  "/api/v2/iscsi/{iqn}/stop": {
    /** Stops an iSCSI target. */
    post: operations["iscsiStop"];
  };
  "/api/v2/iscsi/{iqn}/{lun}": {
    /** Gets the resource config for a single logical unit of an iSCSI target. */
    get: operations["iscsiGetLu"];
    /** Adds a logical unit to an iSCSI target. The target must be stopped when this operation is run. */
    put: operations["iscsiAddLu"];
    /** Deletes a single logical unit from an iSCSI target. The target must be stopped when this operation is run. */
    delete: operations["iscsiDeleteLu"];
  };
  "/api/v2/nfs": {
    /** Lists all NFS exports created by LINSTOR Gateway */
    get: operations["nfsList"];
    /** Creates a new NFS export */
    post: operations["nfsCreate"];
  };
  "/api/v2/nfs/{name}": {
    /** Gets details and status information about an NFS export. */
    get: operations["nfsGet"];
    /** Delete an NFS export, including all its volumes. */
    delete: operations["nfsDelete"];
  };
  "/api/v2/nfs/{name}/start": {
    /** Starts an NFS export. This is only possible if the export is currently stopped, otherwise this operation does nothing. */
    post: operations["nfsStart"];
  };
  "/api/v2/nfs/{name}/stop": {
    /** Stops an NFS export. Stopping an export makes it unavailable to its consumers while not fully deleting it. This is only possible if the export is currently started, otherwise this operation does nothing. */
    post: operations["nfsStop"];
  };
  "/api/v2/nfs/{name}/{volume}": {
    /** Gets information about a single volume of an NFS export */
    get: operations["nfsGetVolume"];
    /** Deletes a single volume from an NFS export. The export must be stopped before this operation can be executed. */
    delete: operations["nfsDeleteVolume"];
  };
  "/api/v2/nvme-of": {
    /** Lists all NVMe-oF targets created by LINSTOR Gateway */
    get: operations["nvmeOfList"];
    /** Creates a new NVMe-oF target */
    post: operations["nvmeOfCreate"];
  };
  "/api/v2/nvme-of/{nqn}": {
    /** Get information about a single NVMe-oF target */
    get: operations["nvmeOfGet"];
    /** Deletes an NVMe-oF target, along with all its volumes. */
    delete: operations["nvmeOfDelete"];
  };
  "/api/v2/nvme-of/{nqn}/start": {
    /** Starts an NVMe-oF target. This is only possible if the target is currently stopped, otherwise this operation does nothing. */
    post: operations["nvmeOfStart"];
  };
  "/api/v2/nvme-of/{nqn}/stop": {
    /** Stops an NVMe-oF target. This is only possible if the target is currently started, otherwise this operation does nothing. */
    post: operations["nvmeOfStop"];
  };
  "/api/v2/nvme-of/{nqn}/{nsid}": {
    /** Gets a single volume from an NVMe-oF target */
    get: operations["nvmeOfGetVolume"];
    /** Adds a volume to an existing NVMe-oF target. The target must be stopped before executing this operation, or it will fail. */
    post: operations["nvmeOfAddVolume"];
    /** Deletes a volume from an existing NVMe-oF target. The target must be stopped before executing this operation, or it will fail. */
    delete: operations["nvmeOfVolumeDelete"];
  };
}

export interface components {
  schemas: {
    IQN: string;
    /** NQN */
    NQN: string;
    IPCidr: string;
    /** @enum {string} */
    ResourceState: "OK" | "Degraded" | "Bad";
    /** @enum {string} */
    ServiceState: "Started" | "Stopped";
    VolumeState: {
      number?: number;
      state?: components["schemas"]["ResourceState"];
    };
    ResourceStatus: {
      state?: components["schemas"]["ResourceState"];
      service?: components["schemas"]["ServiceState"];
      primary?: string;
      nodes?: string[];
      volumes?: components["schemas"]["VolumeState"][];
    };
    VolumeConfig: {
      number?: number;
      /** @example 1048576 */
      size_kib?: number;
    };
    ISCSIResourceConfig: {
      iqn: components["schemas"]["IQN"];
      allowed_initiators?: components["schemas"]["IQN"][];
      resource_group: string;
      volumes: components["schemas"]["VolumeConfig"][];
      username?: string;
      password?: string;
      service_ips: components["schemas"]["IPCidr"][];
      status?: components["schemas"]["ResourceStatus"];
    };
    NFSResourceConfig: {
      name?: string;
      service_ip?: components["schemas"]["IPCidr"];
      allowed_ips?: components["schemas"]["IPCidr"][];
      resource_group?: string;
      volumes?: components["schemas"]["VolumeConfig"][];
      status?: components["schemas"]["ResourceStatus"];
    };
    /** Error */
    Error: {
      code?: string;
      message?: string;
    };
    /** NvmeOfResourceConfig */
    NvmeOfResourceConfig: {
      nqn?: components["schemas"]["NQN"];
      service_ip?: components["schemas"]["IPCidr"];
      resource_group?: string;
      volumes?: components["schemas"]["VolumeConfig"][];
      status?: components["schemas"]["ResourceStatus"];
    };
  };
  responses: {
    /** The given IQN has an invalid format. */
    InvalidIQN: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** No iSCSI target with the given IQN can be found. */
    IQNNotFound: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** Some error occurred */
    InternalServerError: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** Example response */
    ExportNotFound: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** No NVMe-oF target with the given NQN can be found. */
    NQNNotFound: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** The given NQN has an invalid format. */
    InvalidNQN: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
  };
  parameters: {
    /**
     * @description IQN of the target
     * @example iqn.1998-06.com.linbit:vmstorage
     */
    IQN: string;
    /**
     * @description Logical unit number
     * @example 0
     */
    LUN: number;
  };
}

export interface operations {
  /** Returns a list of all iSCSI targets created by LINSTOR Gateway */
  iscsiList: {
    responses: {
      /** Array of iSCSI target resource configs. */
      200: {
        content: {
          "application/json": components["schemas"]["ISCSIResourceConfig"][];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Creates a new iSCSI target */
  iscsiCreate: {
    responses: {
      /** The iSCSI target was successfully created. The created target is returned. */
      201: {
        headers: {
          /** The URL where the newly created target can be found */
          Location?: string;
        };
        content: {
          "application/json": components["schemas"]["ISCSIResourceConfig"];
        };
      };
      /** Invalid input parameters */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ISCSIResourceConfig"];
      };
    };
  };
  /** Gets the resource config of a single iSCSI target. */
  iscsiGet: {
    parameters: {
      path: {
        /** IQN of the target */
        iqn: string;
      };
    };
    responses: {
      /** A single iSCSI target resource config */
      200: {
        content: {
          "application/json": components["schemas"]["ISCSIResourceConfig"];
        };
      };
      /** The given IQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No iSCSI target with the given IQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Deletes an iSCSI target, along with all its LUNs */
  iscsiDelete: {
    parameters: {
      path: {
        /** IQN of the target */
        iqn: string;
      };
    };
    responses: {
      /** The target was successfully deleted. The response body is empty. */
      200: unknown;
      /** The given IQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No iSCSI target with the given IQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Starts an iSCSI target. */
  iscsiStart: {
    parameters: {
      path: {
        /** IQN of the target */
        iqn: string;
      };
    };
    responses: {
      /** The iSCSI target was successfully started */
      200: unknown;
      /** The given IQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No iSCSI target with the given IQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Stops an iSCSI target. */
  iscsiStop: {
    parameters: {
      path: {
        /** IQN of the target */
        iqn: string;
      };
    };
    responses: {
      /** The iSCSI target was successfully stopped */
      200: unknown;
      /** The given IQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No iSCSI target with the given IQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Gets the resource config for a single logical unit of an iSCSI target. */
  iscsiGetLu: {
    parameters: {
      path: {
        /** IQN of the target */
        iqn: string;
        /** Logical unit number */
        lun: number;
      };
    };
    responses: {
      /** A single volume config */
      200: {
        content: {
          "application/json": components["schemas"]["VolumeConfig"];
        };
      };
      /** The given IQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No iSCSI target with the given IQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Adds a logical unit to an iSCSI target. The target must be stopped when this operation is run. */
  iscsiAddLu: {
    parameters: {
      path: {
        /** IQN of the target */
        iqn: string;
        /** Logical unit number */
        lun: number;
      };
    };
    responses: {
      /** The VolumeConfig of the logical unit that was just added */
      200: {
        content: {
          "application/json": components["schemas"]["VolumeConfig"];
        };
      };
      /** The given IQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No iSCSI target with the given IQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Deletes a single logical unit from an iSCSI target. The target must be stopped when this operation is run. */
  iscsiDeleteLu: {
    parameters: {
      path: {
        /** IQN of the target */
        iqn: string;
        /** Logical unit number */
        lun: number;
      };
    };
    responses: {
      /** The logical unit was successfully deleted. The response body is empty. */
      200: unknown;
      /** The given IQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No iSCSI target with the given IQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Lists all NFS exports created by LINSTOR Gateway */
  nfsList: {
    responses: {
      /** Array of NFS export resource configs */
      200: {
        content: {
          "application/json": components["schemas"]["NFSResourceConfig"][];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Creates a new NFS export */
  nfsCreate: {
    responses: {
      /** The export was successfully created */
      201: {
        headers: {
          /** The URL where the newly created export can be found */
          Location?: string;
        };
        content: {
          "application/json": components["schemas"]["NFSResourceConfig"];
        };
      };
      /** Invalid input parameters */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Gets details and status information about an NFS export. */
  nfsGet: {
    parameters: {
      path: {
        /** Name of the NFS export */
        name: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["NFSResourceConfig"];
        };
      };
      /** Example response */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Delete an NFS export, including all its volumes. */
  nfsDelete: {
    parameters: {
      path: {
        /** Name of the NFS export */
        name: string;
      };
    };
    responses: {
      /** The export was deleted. The body is empty. */
      200: unknown;
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Starts an NFS export. This is only possible if the export is currently stopped, otherwise this operation does nothing. */
  nfsStart: {
    parameters: {
      path: {
        /** Name of the NFS export */
        name: string;
      };
    };
    responses: {
      /** The export was successfully started. Returns the resource config of the started export. */
      200: {
        headers: {
          /** The URL to the NFS export */
          Location?: string;
        };
        content: {
          "application/json": components["schemas"]["NFSResourceConfig"];
        };
      };
      /** Example response */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Stops an NFS export. Stopping an export makes it unavailable to its consumers while not fully deleting it. This is only possible if the export is currently started, otherwise this operation does nothing. */
  nfsStop: {
    parameters: {
      path: {
        /** Name of the NFS export */
        name: string;
      };
    };
    responses: {
      /** The export was successfully stopped. Returns the resource config of the stopped export. */
      200: {
        headers: {
          /** The URL to the NFS export */
          Location?: string;
        };
        content: {
          "application/json": components["schemas"]["NFSResourceConfig"];
        };
      };
      /** Example response */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Gets information about a single volume of an NFS export */
  nfsGetVolume: {
    parameters: {
      path: {
        /** Name of the NFS export */
        name: string;
        /** Volume ID */
        volume: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["VolumeConfig"];
        };
      };
      /** Invalid volume ID */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Example response */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Deletes a single volume from an NFS export. The export must be stopped before this operation can be executed. */
  nfsDeleteVolume: {
    parameters: {
      path: {
        /** Name of the NFS export */
        name: string;
        /** Volume ID */
        volume: string;
      };
    };
    responses: {
      /** The volume was deleted. The body is empty. */
      200: unknown;
      /** Example response */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Lists all NVMe-oF targets created by LINSTOR Gateway */
  nvmeOfList: {
    responses: {
      /** List of targets */
      200: {
        content: {
          "application/json": components["schemas"]["NvmeOfResourceConfig"][];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Creates a new NVMe-oF target */
  nvmeOfCreate: {
    responses: {
      /** Created */
      201: {
        headers: {
          /** The URL to the newly created target */
          Location?: string;
        };
        content: {
          "application/json": components["schemas"]["NvmeOfResourceConfig"];
        };
      };
      /** Invalid parameters */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["NvmeOfResourceConfig"];
      };
    };
  };
  /** Get information about a single NVMe-oF target */
  nvmeOfGet: {
    parameters: {
      path: {
        /** The NQN of the target */
        nqn: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["NvmeOfResourceConfig"];
        };
      };
      /** The given NQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No NVMe-oF target with the given NQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Deletes an NVMe-oF target, along with all its volumes. */
  nvmeOfDelete: {
    parameters: {
      path: {
        /** The NQN of the target */
        nqn: string;
      };
    };
    responses: {
      /** OK */
      200: unknown;
      /** The given NQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No NVMe-oF target with the given NQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Starts an NVMe-oF target. This is only possible if the target is currently stopped, otherwise this operation does nothing. */
  nvmeOfStart: {
    parameters: {
      path: {
        /** The NQN of the target */
        nqn: string;
      };
    };
    responses: {
      /** OK */
      200: {
        headers: {
          /** URL to the started NVMe-oF target */
          Location?: string;
        };
        content: {
          "application/json": components["schemas"]["NvmeOfResourceConfig"];
        };
      };
      /** The given NQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No NVMe-oF target with the given NQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Stops an NVMe-oF target. This is only possible if the target is currently started, otherwise this operation does nothing. */
  nvmeOfStop: {
    parameters: {
      path: {
        /** The NQN of the target */
        nqn: string;
      };
    };
    responses: {
      /** OK */
      200: {
        headers: {
          /** URL to the stopped NVMe-oF target */
          Location?: string;
        };
        content: {
          "application/json": components["schemas"]["NvmeOfResourceConfig"];
        };
      };
      /** The given NQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No NVMe-oF target with the given NQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Gets a single volume from an NVMe-oF target */
  nvmeOfGetVolume: {
    parameters: {
      path: {
        /** The NQN of the target */
        nqn: string;
        /** The ID of the namespace */
        nsid: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["VolumeConfig"];
        };
      };
      /** The given NQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No NVMe-oF target with the given NQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Adds a volume to an existing NVMe-oF target. The target must be stopped before executing this operation, or it will fail. */
  nvmeOfAddVolume: {
    parameters: {
      path: {
        /** The NQN of the target */
        nqn: string;
        /** The ID of the namespace */
        nsid: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["VolumeConfig"];
        };
      };
      /** The given NQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Not Found */
      404: unknown;
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
    /** The new volume */
    requestBody: {
      content: {
        "application/json": components["schemas"]["VolumeConfig"];
      };
    };
  };
  /** Deletes a volume from an existing NVMe-oF target. The target must be stopped before executing this operation, or it will fail. */
  nvmeOfVolumeDelete: {
    parameters: {
      path: {
        /** The NQN of the target */
        nqn: string;
        /** The ID of the namespace */
        nsid: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
      /** The given NQN has an invalid format. */
      400: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** No NVMe-oF target with the given NQN can be found. */
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      /** Some error occurred */
      500: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
}

export interface external {}