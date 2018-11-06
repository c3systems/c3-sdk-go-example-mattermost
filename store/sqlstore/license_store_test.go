// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

package sqlstore

import (
	"testing"

	"github.com/c3systems/mattermost-server/store/storetest"
)

func TestLicenseStore(t *testing.T) {
	StoreTest(t, storetest.TestLicenseStore)
}
