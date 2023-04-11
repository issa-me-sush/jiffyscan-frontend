import { getNetworkParam } from '@/components/common/utils';
import Layout from '@/components/globals/Layout';
import { useConfig } from '@/context/config';
import Account from '@/views/account/Account';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';

function RecentAccount() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <Account slug={slug} />
        </div>
    );
}

export default RecentAccount;

RecentAccount.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;