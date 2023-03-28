import axios from 'axios';

export interface UserOp {
    id: string;
    transactionHash: string;
    userOpHash: string;
    sender: string;
    paymaster: string;
    nonce: number;
    actualGasCost: number;
    actualGasPrice: number;
    actualGasUsed: number;
    success: Boolean;
    revertReason: string;
    blockTime: number;
    blockNumber: number;
    network: String;
    input: string;
    target: string;
    callData: string;
    beneficiary: string;
    factory: string;
    value: number;
}

export interface Bundle {
    userOpsLength: number;
    transactionHash: string;
    network: string;
    blockNumber: number;
    timestamp: number;
    userOps: UserOp[];
}

export interface DailyMetric {
    userOpsDaily: string;
    bundleDaily: string;
    walletsCreatedDaily: string;
    gasCostCollectedDaily: string;
    userOpsTotal: string;
    bundlesTotal: string;
    walletsCreatedTotal: string;
    gasCostCollectedTotal: string;
    daySinceEpoch: string;
    activeWalletsDaily: string;
    activeWallets: string[];
}

export interface GlobalCounts {
    userOpCounter: number;
    id: number;
    walletsCreated: number;
    bundleCounter: number;
}

export interface GetUserOpsHash {
    verificationGasLimit: string;
    userOpHash: string;
    transactionHash: string;
    target: string;
    success: boolean;
    signature: string;
    sender: string;
    revertReason: string | null;
    preVerificationGas: string;
    paymasterAndData: string;
    paymaster: string;
    nonce: string;
    network: string | 'mainnet';
    maxPriorityFeePerGas: number;
    maxFeePerGas: number;
    input: string;
    gasPrice: string;
    id: string;
    gasLimit: string;
    factory: string;
    callGasLimit: string;
    callData: string;
    blockTime: string;
    blockNumber: string;
    beneficiary: string;
    baseFeePerGas: string;
    actualGasUsed: string;
    actualGasCost: number;
    value: number;
}
export const getLatestUserOps = async (selectedNetwork: string, pageSize: number, pageNo: number): Promise<UserOp[]> => {
    const response = await fetch(
        'https://api.jiffyscan.xyz/v0/getLatestUserOps?network=' + selectedNetwork + '&first=' + pageSize + '&skip=' + pageNo * pageSize,
    );
    const data = await response.json();
    if ('userOps' in data) {
        return data.userOps as UserOp[];
    }
    return [] as UserOp[];
};

export const getLatestBundles = async (selectedNetwork: string, pageSize: number, pageNo: number): Promise<Bundle[]> => {
    const response = await fetch(
        'https://api.jiffyscan.xyz/v0/getLatestBundles?network=' + selectedNetwork + '&first=' + pageSize + '&skip=' + pageNo * pageSize,
    );
    const data = await response.json();
    if ('bundles' in data) {
        return data.bundles as Bundle[];
    }
    return [] as Bundle[];
};

export const getDailyMetrics = async (selectedNetwork: string, noOfDays: number): Promise<DailyMetric[]> => {
    const response = await fetch('https://api.jiffyscan.xyz/v0/getDailyMetrics?network=' + selectedNetwork + '&noOfDays=' + noOfDays);
    const data = await response.json();
    if ('metrics' in data) {
        return data.metrics as DailyMetric[];
    }
    return [] as DailyMetric[];
};

export const getGlobalMetrics = async (selectedNetwork: string): Promise<GlobalCounts> => {
    const response = await fetch('https://api.jiffyscan.xyz/v0/getGlobalCounts?network=' + selectedNetwork);
    const data = await response.json();
    if ('metrics' in data) {
        return data.metrics as GlobalCounts;
    }
    return {} as GlobalCounts;
};
export const getUserOp = async (userOpHash: string): Promise<GetUserOpsHash[]> => {
    const response = await fetch('https://api.jiffyscan.xyz/v0/getUserOp?hash=' + userOpHash);
    const data = await response.json();
    if ('userOps' in data) {
        return data.userOps as GetUserOpsHash[];
    }

    return [] as GetUserOpsHash[];
};
